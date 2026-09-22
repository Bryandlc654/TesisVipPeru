import PageEditor from './PageEditor';
import Carreras from '../pages/Carreras/Carreras';
import { defaultCarrerasContent, carrerasScope } from '../cms/defaultCarreras';

const AdminCarreras = () => (
  <PageEditor
    page="carreras"
    defaults={defaultCarrerasContent}
    scope={carrerasScope}
    title="Carreras"
    preview={Carreras}
  />
);

export default AdminCarreras;
