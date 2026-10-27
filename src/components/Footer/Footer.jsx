import { useCMS } from '../../cms/ContentContext';
import { Icon, ImageField, LinkField, Text } from '../../cms/Editable';

const Footer = () => {
  const { get, editMode } = useCMS();
  const menu = get('footer.menu') || [];
  const socials = get('footer.socials') || [];
  const email = get('footer.email');
  const phone = get('footer.phone') || '';

  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__group">
          <div className="footer__info">
            <a
              className="footer__logo"
              href="/"
              onClick={(event) => {
                if (editMode) event.preventDefault();
              }}
            >
              <ImageField
                path="footer.logo"
                className="footer__img"
                loading="lazy"
                alt={get('footer.logoAlt')}
              />
            </a>
            <Text path="footer.paragraph" as="p" className="footer__paragraph paragraph" multiline />
          </div>
          <nav className="footer__nav">
            <Text path="footer.menuTitle" as="p" className="footer__title" />
            <ul className="footer__menu">
              {menu.map((item, index) => (
                <li className="footer__item" key={`${item.label}-${index}`}>
                  <LinkField path={`footer.menu.${index}`} className="footer__link" />
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer__nav">
            <Text path="footer.socialsTitle" as="p" className="footer__title" />
            <ul className="footer__menu">
              {socials.map((item, index) => (
                <li className="footer__item" key={`${item.label}-${index}`}>
                  <LinkField path={`footer.socials.${index}`} className="footer__link" />
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer__nav">
            <div className="footer__texts">
              <Text path="footer.contactTitle" as="p" className="footer__title" />
              <Text
                path="footer.contactParagraph"
                as="p"
                className="footer__info-contact paragraph"
                multiline
              />
            </div>
            <ul className="footer__menu">
              <li className="footer__item footer__item--contact">
                <span className="icon">
                  <Icon name="geo" size={16} />
                </span>
                <Text path="footer.address" as="address" className="footer__address" />
              </li>
              <li className="footer__item footer__item--contact">
                <span className="icon">
                  <Icon name="envelope" size={16} />
                </span>
                <a
                  className="footer__link"
                  href={`mailto:${email}`}
                  onClick={(event) => {
                    if (editMode) event.preventDefault();
                  }}
                >
                  <Text path="footer.email" as="span" />
                </a>
              </li>
              <li className="footer__item footer__item--contact">
                <span className="icon">
                  <Icon name="telephone" size={16} />
                </span>
                <a
                  className="footer__link"
                  href={`tel:${String(phone).replace(/\s+/g, '')}`}
                  onClick={(event) => {
                    if (editMode) event.preventDefault();
                  }}
                >
                  <Text path="footer.phone" as="span" />
                </a>
              </li>
            </ul>
            <div className="footer__action">
              <LinkField path="footer.cta" className="btn-primary footer__btn" />
            </div>
          </nav>
        </div>
        <p className="footer__development container">
          <Text path="footer.creditPrefix" as="span" />{' '}
          <LinkField path="footer.credit" className="next" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
