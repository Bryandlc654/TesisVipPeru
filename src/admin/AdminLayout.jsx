import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './admin.css';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="admin">
      <aside className="admin__sidebar">
        <div className="admin__brand">
          <span className="admin__brand-mark">TV</span>
          <div>
            <strong>Tesis VIP</strong>
            <small>Panel administrador</small>
          </div>
        </div>
        <nav className="admin__nav">
          <NavLink
            to="/admin/inicio"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/admin/servicios"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Servicios
          </NavLink>
          <NavLink
            to="/admin/carreras"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Carreras
          </NavLink>
          <NavLink
            to="/admin/contacto"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/admin/testimonios"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Testimonios
          </NavLink>
          <NavLink
            to="/admin/blog"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/admin/articulos"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Artículos
          </NavLink>
          <NavLink
            to="/admin/publicaciones"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Publicaciones
          </NavLink>
          <NavLink
            to="/admin/reclamaciones"
            className={({ isActive }) => `admin__nav-link ${isActive ? 'is-active' : ''}`}
          >
            Reclamaciones
          </NavLink>
        </nav>
        <div className="admin__sidebar-foot">
          <div className="admin__user">
            <strong>{user?.name || 'Administrador'}</strong>
            <small>{user?.email}</small>
          </div>
          <a className="admin__nav-link admin__nav-link--ghost" href="/" target="_blank" rel="noreferrer">
            Ver sitio
          </a>
          <button type="button" className="admin__logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </aside>
      <div className="admin__main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
