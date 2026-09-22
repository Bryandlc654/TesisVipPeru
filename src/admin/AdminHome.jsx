import PageEditor from './PageEditor';
import Inicio from '../pages/Inicio/Inicio';
import { defaultHomeContent } from '../cms/defaultHome';

const AdminHome = () => (
  <PageEditor page="home" defaults={defaultHomeContent} title="Inicio" preview={Inicio} />
);

export default AdminHome;
