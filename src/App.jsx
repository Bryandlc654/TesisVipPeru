import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from './pages/Inicio/Inicio';
import Nosotros from './pages/SobreNosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import Servicios from './pages/Servicios/Servicios';
import Blog from './pages/Blog/Blog';
import Pagos from './pages/Pagos/Pagos';
import Carreras from './pages/Carreras/Carreras';
import Testimonios from './pages/Testomonios/Testimonios';
import { ContentProvider } from './cms/ContentContext';
import ArticleView from './cms/ArticleView';
import { defaultHomeContent } from './cms/defaultHome';
import { defaultCarrerasContent, carrerasScope } from './cms/defaultCarreras';
import { defaultServiciosContent, serviciosScope } from './cms/defaultServicios';
import { defaultContactoContent, contactoScope } from './cms/defaultContacto';
import { defaultTestimoniosContent, testimoniosScope } from './cms/defaultTestimonios';
import { defaultBlogContent, blogScope, articleDefaults, articleScope } from './cms/defaultPosts';
import { AuthProvider } from './admin/AuthContext';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/AdminLogin';
import AdminHome from './admin/AdminHome';
import AdminCarreras from './admin/AdminCarreras';
import AdminServicios from './admin/AdminServicios';
import AdminContacto from './admin/AdminContacto';
import AdminTestimonios from './admin/AdminTestimonios';
import AdminBlog from './admin/AdminBlog';
import AdminArticulos from './admin/AdminArticulos';
import AdminPublicaciones from './admin/AdminPublicaciones';
import AdminReclamaciones from './admin/AdminReclamaciones';
import DynamicArticle from './pages/Blog/DynamicArticle';
import LibroDeReclamaciones from './pages/LibroDeReclamaciones/LibroDeReclamaciones';

const page = (pageName, defaults, scope, Component) => (
  <ContentProvider page={pageName} defaults={defaults} scope={scope}>
    <Component />
  </ContentProvider>
);

const article = (slug) => (
  <ContentProvider page={slug} defaults={articleDefaults(slug)} scope={articleScope}>
    <ArticleView />
  </ContentProvider>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ContentProvider page="home" defaults={defaultHomeContent}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Contacto" element={page('contacto', defaultContactoContent, contactoScope, Contacto)} />
            <Route path="/Servicios" element={page('servicios', defaultServiciosContent, serviciosScope, Servicios)} />
            <Route path="/Blog" element={page('blog', defaultBlogContent, blogScope, Blog)} />
            <Route path="/Pagos" element={<Pagos />} />
            <Route path="/Carreras" element={page('carreras', defaultCarrerasContent, carrerasScope, Carreras)} />
            <Route path="/Testimonios" element={page('testimonios', defaultTestimoniosContent, testimoniosScope, Testimonios)} />

            <Route path="/ComoElegirTemaTesis" element={article('post-1')} />
            <Route path="/Marco-Teorico" element={article('post-2')} />
            <Route path="/Tesis-Universitaria" element={article('post-3')} />
            <Route path="/Conclusiones" element={article('post-4')} />
            <Route path="/Como-Escribir-Introduccion-Tesis" element={article('post-5')} />
            <Route path="/El-Marco-Teorico" element={article('post-6')} />
            <Route path="/articulo/:slug" element={<DynamicArticle />} />
            <Route path="/LibroDeReclamaciones" element={<LibroDeReclamaciones />} />
            <Route path="/libro-de-reclamaciones" element={<LibroDeReclamaciones />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="inicio" replace />} />
              <Route path="inicio" element={<AdminHome />} />
              <Route path="servicios" element={<AdminServicios />} />
              <Route path="carreras" element={<AdminCarreras />} />
              <Route path="contacto" element={<AdminContacto />} />
              <Route path="testimonios" element={<AdminTestimonios />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="articulos" element={<AdminArticulos />} />
              <Route path="publicaciones" element={<AdminPublicaciones />} />
              <Route path="reclamaciones" element={<AdminReclamaciones />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ContentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
