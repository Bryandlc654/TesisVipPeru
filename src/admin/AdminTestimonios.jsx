import PageEditor from './PageEditor';
import Testimonios from '../pages/Testomonios/Testimonios';
import { defaultTestimoniosContent, testimoniosScope } from '../cms/defaultTestimonios';

const AdminTestimonios = () => (
  <PageEditor
    page="testimonios"
    defaults={defaultTestimoniosContent}
    scope={testimoniosScope}
    title="Testimonios"
    preview={Testimonios}
  />
);

export default AdminTestimonios;
