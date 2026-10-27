import { Link } from 'react-router-dom';
import { useCMS } from '../../cms/ContentContext';
import { Icon, IconField, ImageField, LinkField, Text } from '../../cms/Editable';

const DataBlock = ({ copy }) => {
  const { get, editMode } = useCMS();
  const socials = get('navbar.socials') || [];
  const email = get('navbar.email');

  return (
    <div className={`data__animate ${copy ? 'data__animate--copy' : ''}`}>
      <ul className="data__menu data__menu--socials">
        {socials.map((social, index) => (
          <li className="data__item" key={`${copy ? 'copy-' : ''}${social.label}-${index}`}>
            <LinkField
              path={`navbar.socials.${index}`}
              className="data__link"
              title={`Ir a ${social.label}`}
            >
              <IconField path={`navbar.socials.${index}.icon`} size={16} />
            </LinkField>
          </li>
        ))}
      </ul>
      <ul className="data__menu data__menu--contact">
        <li className="data__item">
          <a
            className="data__link data__link-email"
            href={`mailto:${email}`}
            title="Enviar Correo"
            onClick={(event) => {
              if (editMode) event.preventDefault();
            }}
          >
            <Icon name="envelope" size={16} />
            <Text path="navbar.email" as="span" />
          </a>
        </li>
        <li className="data__item">
          <address className="data__address">
            <Icon name="geo" size={16} />
            <Text path="navbar.address" as="span" />
          </address>
        </li>
        <li className="data__item">
          <a
            className="data__link data__link-book"
            href="/LibroDeReclamaciones"
            target="_blank"
            rel="noreferrer"
            title="Libro de Reclamaciones"
          >
            <Icon name="journal" size={16} />
            <span>Libro de Reclamaciones</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const { get, editMode } = useCMS();
  const menu = get('navbar.menu') || [];

  return (
    <>
      <nav className="data">
        <div className="data__content container">
          <DataBlock />
          <DataBlock copy />
        </div>
      </nav>
      <nav className="navbar container">
        <Link className="navbar__logo" to="/Inicio">
          <ImageField path="navbar.logo" className="navbar__img" alt={get('navbar.logoAlt')} />
        </Link>
        <ul className="navbar__menu">
          {menu.map((item, index) => (
            <li
              className={`navbar__item ${item.children?.length ? 'navbar__item--submenu' : ''}`}
              key={`${item.label}-${index}`}
            >
              <LinkField
                path={`navbar.menu.${index}`}
                className={`navbar__link ${item.children?.length ? 'navbar__link--submenu' : ''}`}
              >
                {item.children?.length ? (
                  <>
                    <Text path={`navbar.menu.${index}.label`} as="span" />
                    <Icon name="chevronDown" size={20} />
                  </>
                ) : undefined}
              </LinkField>
              {item.children?.length ? (
                <ul className="navbar__submenu">
                  {item.children.map((child, childIndex) => (
                    <li className="navbar__item" key={`${child.label}-${childIndex}`}>
                      <LinkField
                        path={`navbar.menu.${index}.children.${childIndex}`}
                        className="navbar__link"
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <label className="navbar__label navbar__label--close" htmlFor="menu">
            <Icon name="close" size={16} className="icon-close" />
          </label>
        </ul>
        <label className="navbar__label" htmlFor="menu">
          <input id="menu" className="navbar__checkbox" type="checkbox" />
          <Icon name="menu" size={16} className="icon-menu" />
        </label>
      </nav>
      {editMode ? <div className="cms-navbar-hint">Editando barra de navegación</div> : null}
    </>
  );
};

export default Navbar;
