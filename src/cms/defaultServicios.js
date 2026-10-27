import ServiceImg1 from '../assets/img/servicios-uno.webp';
import ServiceImg2 from '../assets/img/servicios-dos.webp';
import ServiceImg3 from '../assets/img/servicios-tres.webp';
import ServiceImg4 from '../assets/img/asesora.webp';
import ServiceImg5 from '../assets/img/trabajos.webp';
import ServiceImg6 from '../assets/img/turnitin.webp';

const group = (image, title1, title2, paragraph, href) => ({
  image,
  guide: 'Servicios',
  title1,
  title2,
  paragraph,
  icon: 'whatsapp',
  phone: '+51 917 622 183',
  phoneLabel: 'Whatsapp',
  cta: { label: 'Iniciar', href, target: '_blank' },
});

export const serviciosScope = ['pageHero', 'intro', 'services'];

export const defaultServiciosContent = {
  pageHero: {
    title1: 'Nuestros ',
    title2: ' Servicios',
  },
  intro: {
    guide: 'Lo que hacemos',
    title1: 'Nuestros ',
    title2: 'Servicios',
    paragraph:
      'Nuestro enfoque es personalizado y nos comprometemos con tu éxito académico, garantizando calidad, confidencialidad y apoyo continuo.',
  },
  services: {
    items: [
      group(
        ServiceImg1,
        'Asesoría de Tesis',
        'de Pregrado',
        'Nuestro servicio de asesoría de tesis de pregrado está diseñado para ayudarte a alcanzar el éxito académico. Contamos con un equipo de expertos en diversas disciplinas que te guiarán en cada etapa del proceso, desde la investigación hasta la presentación final.',
        'https://wa.link/yrgtop',
      ),
      group(
        ServiceImg2,
        'Asesoría de Tesis',
        'de Postgrado',
        'Te brindamos un servicio especializado en la asesoría de tesis de postgrado, con un enfoque en la excelencia académica y la profundidad de investigación. Nuestros expertos te guiarán en la estructuración, análisis y presentación de tu trabajo, asegurando que cumpla con los más altos estándares académicos.',
        'https://wa.link/8z5jt9',
      ),
      group(
        ServiceImg3,
        'Levantamiento de',
        'Observaciones',
        'Ofrecemos un servicio profesional de levantamiento de observaciones para tus trabajos académicos. Nuestro equipo se encarga de identificar y corregir cualquier error o inconsistencia, asegurando que tu documento cumpla con todos los requisitos y estándares exigidos.',
        'https://wa.link/2ybw3g',
      ),
      group(
        ServiceImg4,
        'Asesoría de',
        'Tesis',
        'Brindamos un servicio integral de asesoría de tesis para estudiantes de todos los niveles académicos. Nuestro equipo de expertos te guiará en cada etapa del proceso, desde la formulación del tema hasta la defensa final. Recibirás orientación personalizada para desarrollar una investigación sólida y bien estructurada, asegurando que tu tesis cumpla con los más altos estándares académicos.',
        'https://wa.link/1dg7tq',
      ),
      group(
        ServiceImg5,
        'Trabajos',
        'Universitarios',
        'Ofrecemos un servicio completo de elaboración de trabajos universitarios, adaptado a tus necesidades académicas. Nuestro equipo de profesionales te apoyará en la investigación, redacción y presentación de trabajos en diversas áreas del conocimiento. Aseguramos que cada trabajo cumpla con los requisitos y estándares de tu institución, facilitando tu éxito académico.',
        'https://wa.link/qqj13v',
      ),
      group(
        ServiceImg6,
        'Revisión con',
        'Turnitin',
        'Garantiza la originalidad de tus trabajos académicos con nuestro servicio de Revisión con Turnitin. Analizamos tus documentos para detectar cualquier tipo de plagio y te proporcionamos un informe detallado. Nuestro equipo te ayudará a entender los resultados y a mejorar la calidad y autenticidad de tu trabajo, asegurando que cumplas con los estándares académicos.',
        'https://wa.link/q4r7xr',
      ),
    ],
  },
};
