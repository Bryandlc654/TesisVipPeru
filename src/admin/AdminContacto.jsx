import PageEditor from './PageEditor';
import Contacto from '../pages/Contacto/Contacto';
import { defaultContactoContent, contactoScope } from '../cms/defaultContacto';

const AdminContacto = () => (
  <PageEditor
    page="contacto"
    defaults={defaultContactoContent}
    scope={contactoScope}
    title="Contacto"
    preview={Contacto}
  />
);

export default AdminContacto;
