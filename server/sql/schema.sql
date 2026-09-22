-- Esquema de base de datos para el panel administrador de Tesis VIP
-- Uso: mysql -u root -p < server/sql/schema.sql

CREATE DATABASE IF NOT EXISTS tesisvip
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE tesisvip;

CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(120)  NOT NULL DEFAULT 'Administrador',
  email         VARCHAR(190)  NOT NULL UNIQUE,
  password_hash VARCHAR(255)  NOT NULL,
  role          VARCHAR(30)   NOT NULL DEFAULT 'admin',
  is_active     TINYINT(1)    NOT NULL DEFAULT 1,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS content_pages (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  page       VARCHAR(100) NOT NULL UNIQUE,
  data       JSON         NOT NULL,
  updated_by INT          NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_content_user FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);
