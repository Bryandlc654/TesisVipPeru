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

CREATE TABLE IF NOT EXISTS blog_posts (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  slug        VARCHAR(80)   NOT NULL UNIQUE,
  title       VARCHAR(200)  NOT NULL,
  excerpt     VARCHAR(500)  NOT NULL DEFAULT '',
  cover_image VARCHAR(500)  NOT NULL DEFAULT '',
  cover_alt   VARCHAR(200)  NOT NULL DEFAULT '',
  status      VARCHAR(20)   NOT NULL DEFAULT 'published',
  published_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by  INT           NULL,
  CONSTRAINT fk_blog_user FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS complaints (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  code            VARCHAR(30)   NULL UNIQUE,
  consumer_name   VARCHAR(150)  NOT NULL,
  doc_type        VARCHAR(20)   NOT NULL DEFAULT 'DNI',
  doc_number      VARCHAR(30)   NOT NULL,
  address         VARCHAR(255)  NOT NULL DEFAULT '',
  phone           VARCHAR(40)   NOT NULL DEFAULT '',
  email           VARCHAR(190)  NOT NULL DEFAULT '',
  item_type       VARCHAR(20)   NOT NULL DEFAULT 'servicio',
  item_description VARCHAR(500) NOT NULL DEFAULT '',
  item_amount     VARCHAR(60)   NOT NULL DEFAULT '',
  claim_type      VARCHAR(20)   NOT NULL DEFAULT 'reclamo',
  claim_detail    TEXT          NOT NULL,
  claim_request   TEXT          NOT NULL,
  observations    TEXT          NULL,
  status          VARCHAR(20)   NOT NULL DEFAULT 'pendiente',
  response        TEXT          NULL,
  created_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by      INT           NULL,
  CONSTRAINT fk_complaints_user FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);
