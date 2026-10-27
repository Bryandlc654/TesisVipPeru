import N1 from '../assets/icons/1.svg';
import N2 from '../assets/icons/2.svg';
import N3 from '../assets/icons/3.svg';
import N4 from '../assets/icons/4.svg';
import AboutImg1 from '../assets/img/quienes-somos-uno.webp';
import AboutImg2 from '../assets/img/quienes-somos-dos.webp';
import AboutImg3 from '../assets/img/quienes-somos-tres.webp';
import ResultImg from '../assets/img/fondo-resultados.webp';
import ServiceImg1 from '../assets/img/servicios-uno.webp';
import ServiceImg2 from '../assets/img/servicios-dos.webp';
import ServiceImg3 from '../assets/img/servicios-tres.webp';
import ServiceImg4 from '../assets/img/servicios-cuatro.webp';
import ServiceImg5 from '../assets/img/asesora.webp';
import ServiceImg6 from '../assets/img/turnitin.webp';
import ServiceImg7 from '../assets/img/trabajos.webp';
import TestimonialImg1 from '../assets/img/opinion-uno.webp';
import TestimonialImg2 from '../assets/img/opinion-dos.webp';
import TestimonialImg3 from '../assets/img/opinion-tres.webp';
import TestimonialImg4 from '../assets/img/opinion4.webp';
import TestimonialImg5 from '../assets/img/opinion5.webp';
import TestimonialImg6 from '../assets/img/opinion6.webp';
import FaqsImg from '../assets/img/dudas-frecuentes.webp';
import FooterImg from '../assets/img/fondo-contacto.webp';
import FooterImg2 from '../assets/img/estudiante-contacto.webp';
import PlaneImg from '../assets/icons/plane.svg';
import Logo from '../assets/img/logo.webp';
import ChatIcon from '../assets/img/icono.webp';

export const defaultHomeContent = {
  navbar: {
    ruc: 'RUC 20608518712',
    name: 'TESIS VIP PROFESSIONALS CORPORATION',
    address: 'Miguel Grau, Chaclacayo 15476, Perú',
    email: 'info@tesis-vip.com',
    logo: Logo,
    logoAlt: 'Logo de Tesis Vip',
    socials: [
      { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/TesisVip/' },
      { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tesis_vip/' },
      { icon: 'tiktok', label: 'Tik Tok', href: 'https://www.tiktok.com/@tesisvipasesorias' },
      { icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/company/tesis-vip/' },
      {
        icon: 'youtube',
        label: 'Youtube',
        href: 'https://www.youtube.com/@tesisvip-asesoriamientoyca5851',
      },
    ],
    menu: [
      { label: 'Inicio', href: '/Inicio', target: '_self' },
      {
        label: 'Servicios',
        href: '/Servicios',
        target: '_self',
        children: [
          { label: 'Carreras', href: '/Carreras', target: '_self' },
          { label: 'Libro', href: 'https://book.tesis-vip.com', target: '_blank' },
        ],
      },
      {
        label: 'Nosotros',
        href: '/Nosotros',
        target: '_self',
        children: [{ label: 'Testimonios', href: '/Testimonios', target: '_self' }],
      },
      { label: 'Contacto', href: '/Contacto', target: '_self' },
      { label: 'Blog', href: '/Blog', target: '_self' },
    ],
  },
  hero: {
    info: '',
    title1: 'Tu tesis,\ndesde cero',
    title2: 'hasta tu\nsustentación',
    subtitle: 'Asesoría académica personalizada para pregrado, maestría y doctorado.',
    formTitle: 'Agenda una asesoría',
    formParagraph: 'Completa el formulario para comunicarte con nosotros:',
    form: {
      namePlaceholder: 'Nombres',
      careerPlaceholder: 'Seleccione una carrera',
      phonePlaceholder: 'Celular',
      servicePlaceholder: 'Seleccione un servicio',
      messagePlaceholder: 'Escribe tu mensaje aquí',
      submitLabel: 'Hablar con asesor',
      whatsapp: '+51917622183',
      careers: [
        'Ciencias Sociales',
        'Ciencias de la Salud',
        'Ciencias Empresariales',
        'Ingenierías y Arquitectura',
        'Ciencias Biológicas y Agrónomas',
        'Carreras Técnicas',
        'otros',
      ],
      services: [
        'Asesoría de Tesis de Pregrado',
        'Asesoría de Tesis de Postgrado',
        'Levantamiento de Observaciones',
        'Parafraseo',
      ],
    },
  },
  benefits: {
    guide: 'Beneficios',
    title1: 'No solo asesoramos tu tesis.',
    title2: 'Te acompañamos durante todo el proceso.',
    paragraph:
      'Nos especializamos en brindarte un acompañamiento integral y personalizado en cada etapa de tu tesis. Nuestros servicios están diseñados para garantizar tu éxito académico y profesional. Descubre cómo podemos ayudarte:',
    icon: 'whatsapp',
    phone: '+51 917 622 183',
    phoneLabel: 'Whatsapp',
    cta: { label: 'Contáctanos', href: 'https://wa.link/70uspg', target: '_blank' },
    items: [
      {
        image: N1,
        line1: 'Asesoría especializada',
        line2: 'Un profesional acorde con tu carrera y etapa de investigación.',
      },
      {
        image: N2,
        line1: 'Seguimiento personalizado',
        line2: 'Trabajamos sobre tus avances, observaciones y requerimientos académicos.',
      },
      {
        image: N3,
        line1: 'Acompañamiento integral',
        line2: 'Desde el tema y metodología hasta resultados y preparación para la sustentación.',
      },
      {
        image: N4,
        line1: 'Comunicación continua',
        line2: 'Resolvemos tus dudas y hacemos seguimiento durante el desarrollo de tu trabajo.',
      },
    ],
  },
  promo: {
    icon: 'whatsapp',
    title: '¿En qué etapa está tu tesis?',
    number: '+51 917 622 183',
    paragraph:
      'Cuéntanos tu situación y recibe orientación para saber cuál debería ser tu siguiente paso.',
    cta: {
      label: 'Hablar con un asesor',
      href: 'https://wa.link/70uspg',
      target: '_blank',
    },
  },
  about: {
    images: [AboutImg1, AboutImg2, AboutImg3],
    guide: '¿Quiénes somos?',
    title1: 'Un equipo académico detrás de ',
    title2: 'cada etapa de tu investigación',
    paragraph:
      'En Tesis VIP reunimos especialistas en metodología, estadística y distintas áreas profesionales para brindar una asesoría adaptada a cada universidad, carrera y etapa del proceso',
    list: [
      'Especialistas de distintas áreas académicas',
      'Asesoría personalizada según tu proyecto',
      'Seguimiento de avances y observaciones',
      'Soporte metodológico y estadístico',
      'Preparación para la sustentación',
    ],
    cta: { label: 'Conoce a TESIS VIP', href: '/Nosotros', target: '_self' },
  },
  results: {
    background: ResultImg,
    guide: 'Éxito garantizado',
    title1: 'Lo que nunca ',
    title2: 'negociamos.',
    paragraph:
      'Cada proyecto académico merece ser tratado con responsabilidad. Por eso hay principios que forman parte de nuestra manera de trabajar.',
    items: [
      {
        value: 100,
        title: 'Confidencialidad',
        paragraph: 'Tu información y documentos se manejan de forma reservada.',
      },
      {
        value: 100,
        title: 'Transparencia',
        paragraph: 'Desde el inicio conoces el alcance, las etapas y condiciones del servicio.',
      },
      {
        value: 100,
        title: 'Compromiso académico',
        paragraph: 'Cada proyecto se trabaja cuidando sus criterios metodológicos y académicos.',
      },
    ],
  },
  processes: {
    guide: 'Nuestros Procesos',
    title1: 'Contigo hasta la aprobación ',
    title2: 'y sustentación',
    paragraph:
      'En Tesis VIP nuestro trabajo no termina con una entrega. Te acompañamos durante el proceso, atendiendo avances y observaciones hasta llegar a las etapas finales de tu investigación.',
    background: PlaneImg,
    items: [
      {
        number: '01',
        title: 'Evaluamos tu punto de partida',
        paragraph: 'Revisamos tu proyecto, avances y observaciones para definir qué necesitas y cómo continuar.',
      },
      {
        number: '02',
        title: 'Avanzamos contigo',
        paragraph: 'Desarrollamos el trabajo por etapas y atendemos las observaciones que surjan durante el proceso.',
      },
      {
        number: '03',
        title: 'Llegamos hasta el final',
        paragraph:
          'Te acompañamos en las correcciones finales y en la preparación necesaria para tu aprobación y sustentación.',
      },
    ],
  },
  video: {
    src: '/videos/tesis.mp4',
    title: '¿Cómo lo hacemos? | Tesis vip Servicio de asesoría y redacción',
    icon: 'play',
  },
  services: {
    guide: 'Lo que hacemos',
    title1: 'Nuestros ',
    title2: 'Servicios',
    paragraph:
      'Encuentra el tipo de asesoría que necesitas según la etapa en la que se encuentra tu investigación.',
    items: [
      {
        image: ServiceImg1,
        alt: 'Una joven mujer en una graduación de pie frente al escenario',
        title: 'Asesoría de Tesis de Pregrado',
        paragraph: 'Orientación y desarrollo de tu investigación según los requisitos de tu universidad.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/yrgtop', target: '_blank' },
      },
      {
        image: ServiceImg2,
        alt: 'Un joven hombre con anteojos en una graduación de pie',
        title: 'Asesoría de Tesis de Posgrado',
        paragraph: 'Acompañamiento y desarrollo especializado para investigaciones de maestría y doctorado.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/8z5jt9', target: '_blank' },
      },
      {
        image: ServiceImg3,
        alt: 'Un retrato elegante profesional de una mujer de negocios',
        title: 'Levantamiento de Observaciones',
        paragraph: 'Trabajamos las correcciones indicadas por tu asesor, revisor o jurado.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/2ybw3g', target: '_blank' },
      },
      {
        image: ServiceImg4,
        alt: 'Un abogado en un retrato profesional',
        title: 'Revisión y Mejora Académica',
        paragraph: 'Mejoramos claridad, coherencia, redacción académica y citación de tu documento.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/7u5f3x', target: '_blank' },
      },
      {
        image: ServiceImg6,
        alt: 'Un abogado en un retrato profesional',
        title: 'Revisión de Similitud, Originalidad e IA',
        paragraph:
          'Identificamos coincidencias y uso de IA, y orientamos mejoras de citación y redacción académica.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/q4r7xr', target: '_blank' },
      },
      {
        image: ServiceImg5,
        alt: 'Un abogado en un retrato profesional',
        title: 'Asesoría Metodológica',
        paragraph: 'Diseño, población, muestra, instrumentos, operacionalización y análisis.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/1dg7tq', target: '_blank' },
      },
      {
        image: ServiceImg7,
        alt: 'Un abogado en un retrato profesional',
        title: 'Análisis Estadístico y Resultados',
        paragraph: 'Procesamiento de datos, pruebas estadísticas, tablas e interpretación de resultados.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/qqj13v', target: '_blank' },
      },
      {
        image: ServiceImg1,
        alt: 'Una joven mujer en una graduación de pie frente al escenario',
        title: 'Preparación para Sustentación',
        paragraph: 'Organiza tu presentación y prepárate para responder al jurado con mayor seguridad.',
        cta: { label: 'Solicitar servicio', href: 'https://wa.link/70uspg', target: '_blank' },
      },
    ],
  },
  opinions: {
    guide: 'Testimonios',
    title1: 'Clientes ',
    title2: 'Satisfechos',
    paragraph: 'Conoce algunas experiencias de estudiantes y profesionales que acompañamos durante su proceso académico.',
    items: [
      {
        image: TestimonialImg1,
        alt: 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos',
      },
      {
        image: TestimonialImg2,
        alt: 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos',
      },
      {
        image: TestimonialImg3,
        alt: 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos',
      },
      {
        image: TestimonialImg4,
        alt: 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos',
      },
      {
        image: TestimonialImg5,
        alt: 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos',
      },
      {
        image: TestimonialImg6,
        alt: 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos',
      },
    ],
  },
  faqs: {
    image: FaqsImg,
    imageAlt: 'Dos personas consultando algo en sus tabletas',
    badgeIcon: 'checkCircle',
    badgeTitle: '¿Tienes otra duda?',
    badgeText: 'Cuéntanos tu caso y te orientamos.',
    badgeCta: { label: 'Hablar con asesor', href: 'https://wa.link/70uspg', target: '_blank' },
    guide: 'Preguntas frecuentes',
    title1: 'Preguntas ',
    title2: 'Frecuentes',
    paragraph:
      'Aquí aclaramos tus dudas sobre nuestros servicios, para que tomes una decisión informada y segura.',
    items: [
      {
        question: '¿Cómo funcionan las asesorías?',
        answer:
          'Evaluamos tu caso y definimos el tipo de apoyo que necesitas según tu avance, universidad y objetivos.',
      },
      {
        question: '¿Trabajan con los requisitos de mi universidad?',
        answer:
          'Sí. Revisamos la guía, formato y observaciones de tu institución para adaptar la asesoría a sus exigencias.',
      },
      {
        question: '¿Qué pasa si mi asesor o jurado me hace observaciones?',
        answer:
          'Te ayudamos a revisar, ordenar y atender cada observación para que puedas continuar avanzando en tu proceso. Esta es, de hecho, una de las dudas que más aparece en servicios similares.',
      },
      {
        question: '¿Realizan revisión de similitud o Turnitin?',
        answer:
          'Sí. Podemos revisar coincidencias, citación y redacción académica para ayudarte a mejorar la originalidad de tu documento. La revisión de similitud también forma parte de procedimientos formales de diversas universidades.',
      },
      {
        question: '¿Cómo se realizan los pagos?',
        answer:
          'El costo depende del servicio y del estado de tu proyecto. Antes de comenzar, te indicamos claramente el alcance, entregas y condiciones de pago.',
      },
      {
        question: '¿Me acompañan hasta la sustentación?',
        answer:
          'Sí. Nuestro acompañamiento puede continuar durante las correcciones finales y la preparación para tu sustentación.',
      },
    ],
  },
  contact: {
    background: FooterImg,
    studentImage: FooterImg2,
    studentAlt: 'Estudiante',
    guide: 'Déjanos tus datos',
    title1: 'Contáctanos ',
    title2: 'Ahora',
    paragraph:
      'Estamos aquí para escucharte. Ponte en contacto con nuestro equipo para cualquier consulta o sugerencia que tengas.',
    ways: [
      {
        icon: 'geo',
        name: 'Oficina',
        value: 'Chaclacayo 15476, Perú',
      },
      { icon: 'telephone', name: 'Celular', value: '+51 917 622 183' },
      { icon: 'envelope', name: 'Correo', value: 'info@tesis-vip.com' },
    ],
    formTitle: 'Contáctanos',
    formParagraph: 'Completa el formulario de contacto para comunicarte con nosotros',
  },
  info: {
    items: [
      { icon: 'person', prefix: '+ ', value: 120, suffix: '', label: 'Clientes' },
      { icon: 'journal', prefix: '', value: 100, suffix: '%', label: 'Proyectos Completados' },
      { icon: 'award', prefix: '+ ', value: 10, suffix: '', label: 'Años de Experiencia' },
      { icon: 'star', prefix: '', value: 100, suffix: '%', label: 'Recomendado' },
    ],
  },
  footer: {
    logo: Logo,
    logoAlt: 'Logo de Tesis Vip',
    paragraph:
      'Somos un equipo diverso y capacitado, dedicado a ofrecer soluciones personalizadas para asegurar tu éxito académico, con calidad garantizada.',
    menuTitle: 'Menú',
    menu: [
      { label: 'Inicio', href: '/Inicio', target: '_self' },
      { label: 'Servicios', href: '/Servicios', target: '_self' },
      { label: 'Carreras', href: '/Carreras', target: '_self' },
      { label: 'Pagos', href: '/Pagos', target: '_self' },
      { label: 'Nosotros', href: '/Nosotros', target: '_self' },
      { label: 'Testimonios', href: '/Testimonios', target: '_self' },
      { label: 'Contacto', href: '/Contacto', target: '_self' },
      { label: 'Blog', href: '/Blog', target: '_self' },
    ],
    socialsTitle: 'Redes Sociales',
    socials: [
      { label: 'Facebook', href: 'https://www.facebook.com/TesisVip/', target: '_blank' },
      { label: 'Instagram', href: 'https://www.instagram.com/tesis_vip/', target: '_blank' },
      { label: 'Tik Tok', href: 'https://www.tiktok.com/@tesisvipasesorias', target: '_blank' },
      { label: 'Linkedin', href: 'https://www.linkedin.com/company/tesis-vip/', target: '_blank' },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/@tesisvip-asesoriamientoyca5851',
        target: '_blank',
      },
    ],
    contactTitle: 'Hablemos',
    contactParagraph: '¿Tienes dudas sobre tu proyecto?\nEscríbenos.',
    address: 'Chaclacayo 15476, Perú',
    email: 'info@tesisvip.com',
    phone: '+51 917 622 183',
    phoneHref: 'tel:+51917622183',
    cta: {
      label: 'Hablar con un asesor',
      href: 'https://wa.link/70uspg',
      target: '_blank',
    },
    creditPrefix: 'Tesis VIP - Diseñado y Desarrollado por ',
    credit: { label: 'Next Boost Perú', href: 'https://wa.link/glmx1i', target: '_blank' },
  },
  chat: {
    logo: ChatIcon,
    logoAlt: 'Logo Tesis Vip',
    title: 'Asesor en Línea',
    status: 'Online',
    greeting: 'Hola 👋',
    greetingBold: '¿Necesitas ayuda?',
    placeholder: 'Mensaje',
    userLabel: 'Tú',
    phone: '+51917622183',
  },
};
