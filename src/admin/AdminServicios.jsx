import PageEditor from './PageEditor';
import Servicios from '../pages/Servicios/Servicios';
import { defaultServiciosContent, serviciosScope } from '../cms/defaultServicios';

const AdminServicios = () => (
  <PageEditor
    page="servicios"
    defaults={defaultServiciosContent}
    scope={serviciosScope}
    title="Servicios"
    preview={Servicios}
  />
);

export default AdminServicios;
