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
          { label: 'Pagos', href: '/Pagos', target: '_self' },
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
    info: 'Aprobación Garantizada',
    title1: 'Redacción y Asesoría de Tesis',
    title2: 'para Pregado y Postgrado',
    formTitle: 'Agenda una asesoría',
    formParagraph: 'Completa el formulario de contacto para comunicarte con nosotros',
    form: {
      namePlaceholder: 'Nombres',
      careerPlaceholder: 'Seleccione una carrera',
      phonePlaceholder: 'Celular',
      servicePlaceholder: 'Seleccione un servicio',
      messagePlaceholder: 'Escribe tu mensaje aquí',
      submitLabel: 'Enviar',
      whatsapp: '+51930443379',
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
        'Redacción de Tesis de Pregrado',
        'Redacción de Tesis de Postgrado',
        'Levantamiento de Observaciones',
        'Parafraseo',
      ],
    },
  },
  benefits: {
    guide: 'Beneficios',
    title1: '¿Por qué elegir',
    title2: 'a Tesis Vip?',
    paragraph:
      'Nos especializamos en brindarte un acompañamiento integral y personalizado en cada etapa de tu tesis. Nuestros servicios están diseñados para garantizar tu éxito académico y profesional. Descubre cómo podemos ayudarte:',
    icon: 'whatsapp',
    phone: '+51 930 443 379',
    phoneLabel: 'Whatsapp',
    cta: { label: 'Contáctanos', href: 'https://wa.link/70uspg', target: '_blank' },
    items: [
      { image: N1, line1: 'Asesores Privados', line2: 'Altamente Calificados' },
      { image: N2, line1: 'Experiencia 100%', line2: 'Personalizada' },
      { image: N3, line1: 'Te preparamos', line2: 'de Inicio a Fin' },
      { image: N4, line1: 'Tu éxito Académico', line2: 'es nuestra prioridad' },
    ],
  },
  promo: {
    icon: 'telephone',
    title: 'Llama a Nuestros asesores',
    number: '+51930443379',
    paragraph:
      '¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores y da el primer paso hacia el éxito académico. ¡Haz clic para programar tu sesión!',
    cta: {
      label: 'Agendar ahora',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ST_cfzAXUmKy1YHXaKWXlgYYgropwbZcXo1SPR-jnE1WBrkB76Mj8YVsUmkmRbopBmMW8o4_k',
      target: '_blank',
    },
  },
  about: {
    images: [AboutImg1, AboutImg2, AboutImg3],
    guide: 'Nosotros',
    title1: '¿Quiénes ',
    title2: 'Somos?',
    paragraph:
      'En Tesis VIP, somos un equipo diverso y capacitado, dedicado a ofrecer soluciones personalizadas para asegurar tu éxito académico, con calidad garantizada.',
    list: [
      'Asesoría personalizada',
      'Entregas parciales y seguras',
      'Software anti-plagio avanzado',
      'Análisis estadístico especializado',
      'Elaboración de artículos científicos',
      'Presentaciones académicas profesionales',
    ],
    experienceNumber: '10',
    experienceYear: 'años',
    experienceLabel: 'de experiencia',
    cta: { label: 'Más información', href: '/Nosotros', target: '_self' },
  },
  results: {
    background: ResultImg,
    guide: 'Éxito garantizado',
    title1: 'Resultados que ',
    title2: 'Importan',
    paragraph: 'Demuestran nuestro compromiso con cada cliente',
    items: [
      {
        value: 100,
        title: 'Satisfacción',
        paragraph: 'Nuestros clientes son nuestra mejor referencia',
      },
      {
        value: 100,
        title: 'Cumplimiento',
        paragraph: 'Siempre cumpliendo con las expectativas',
      },
      {
        value: 100,
        title: 'Calidad',
        paragraph: 'Avalados por nuestros rigurosos estándares',
      },
    ],
  },
  processes: {
    guide: 'Nuestros Procesos',
    title1: '¿Cómo logramos ',
    title2: 'el éxito?',
    paragraph:
      'Gracias a nuestros procesos detallados y meticulosos, garantizamos el éxito en cada proyecto, asegurando un servicio de alta calidad y satisfacción para todos nuestros clientes',
    background: PlaneImg,
    items: [
      {
        number: '01',
        title: 'Evaluación Inicial',
        paragraph: 'Analizamos tus necesidades y establecemos un plan personalizado de asesorías',
      },
      {
        number: '02',
        title: 'Desarrollo y Entregas',
        paragraph: 'Trabajamos en entregas parciales, brindando informes de progreso',
      },
      {
        number: '03',
        title: 'Revisión y Finalización',
        paragraph: 'Realizamos revisiones detalladas y preparamos tu presentación final',
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
      'Nuestro enfoque es personalizado y nos comprometemos con tu éxito académico, garantizando calidad, confidencialidad y apoyo continuo.',
    items: [
      {
        image: ServiceImg1,
        alt: 'Una joven mujer en una graduación de pie frente al escenario',
        title: 'Redacción de Tesis de Pregrado',
        cta: { label: 'Contratar', href: 'https://wa.link/yrgtop', target: '_blank' },
      },
      {
        image: ServiceImg2,
        alt: 'Un joven hombre con anteojos en una graduación de pie',
        title: 'Redacción de Tesis de Postgrado',
        cta: { label: 'Contratar', href: 'https://wa.link/8z5jt9', target: '_blank' },
      },
      {
        image: ServiceImg3,
        alt: 'Un retrato elegante profesional de una mujer de negocios',
        title: 'Levantamiento de Observaciones',
        cta: { label: 'Contratar', href: 'https://wa.link/2ybw3g', target: '_blank' },
      },
      {
        image: ServiceImg4,
        alt: 'Un abogado en un retrato profesional',
        title: 'Parafraseo',
        cta: { label: 'Contratar', href: 'https://wa.link/7u5f3x', target: '_blank' },
      },
      {
        image: ServiceImg6,
        alt: 'Un abogado en un retrato profesional',
        title: 'Revisión con Turnitin',
        cta: { label: 'Contratar', href: 'https://wa.link/q4r7xr', target: '_blank' },
      },
      {
        image: ServiceImg5,
        alt: 'Un abogado en un retrato profesional',
        title: 'Asesoría de Tesis',
        cta: { label: 'Contratar', href: 'https://wa.link/1dg7tq', target: '_blank' },
      },
      {
        image: ServiceImg7,
        alt: 'Un abogado en un retrato profesional',
        title: 'Redacción de Trabajos Universitarios',
        cta: { label: 'Contratar', href: 'https://wa.link/qqj13v', target: '_blank' },
      },
    ],
  },
  opinions: {
    title1: '¿Qué dicen ',
    title2: 'Nuestros Clientes?',
    paragraph:
      'Sus testimonios reflejan la satisfacción y éxito alcanzados gracias a nuestro compromiso y dedicación en cada proyecto.',
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
    badgeTitle: '¡No lo dudes más!',
    badgeText:
      'Soluciones claras para tus preguntas. ¡Tu éxito académico es nuestra prioridad!',
    guide: 'Preguntas comunes',
    title1: 'Dudas ',
    title2: 'Frecuentes',
    paragraph:
      'Aquí aclaramos tus dudas sobre nuestros servicios, para que tomes una decisión informada y segura.',
    items: [
      {
        question: '¿Cómo se realizaran las asesorías?',
        answer:
          'Tenemos un plan personalizado de asesorías para cada alumno dependiendo de sus necesidades. Podemos ayudarte con tu proyecto desde cero o retomarlo desde donde lo tengas.\n- Plan Básico: 30 minutos.\n- Plan Premium: 45 minutos\n- Plan Gold: 60 minutos.\nTodos cuentan con un profesional especializado en tu área de estudio y Correo electrónico con sugerencias.',
      },
      {
        question: '¿Por qué elegirnos para hacer tu Tesis?',
        answer:
          'Realizamos entregas y pagos parciales, nunca solicitamos el monto total por adelantado. Trabajamos por presentaciones para que puedas revisar y presentar avances a tu tutor.\nUsamos un avanzado software anti plagio y con cada entrega proporcionamos un informe de plagio. Nos adaptamos a cualquier etapa de tu proyecto y ofrecemos precios justos, sin costos excesivos.',
      },
      {
        question: '¿Por qué elegirnos para tu Artículo Científico?',
        answer:
          'En nuestra consultora, nos enfocamos en brindar soluciones efectivas a los problemas y desafíos que enfrentan nuestros clientes, nosotros vamos directo al asunto. Ofrecemos servicios personalizados y adaptados a las necesidades específicas de cada tesista, garantizando un servicio confidencial y de alta calidad. No estamos para hacerte perder el tiempo, realizamos tu Artículo Científico hasta que tu jurado lo apruebe.',
      },
      {
        question: '¿Por qué confiarnos tu Ensayo?',
        answer:
          'Nuestros expertos poseen licenciaturas, maestrías o doctorados en diversas áreas de estudio, lo que respalda tu proyecto de Ensayo con un sólido conocimiento teórico y práctico. Además, nos comprometemos a elaborar tu trabajo académico con calidad y dedicación, asignando un especialista en tu campo para asegurar el mejor resultado posible. También te proporcionamos asistencia personalizada a través de un asesor educativo especializado en tu área de estudio, manteniendo una comunicación directa a través de nuestra plataforma. Puedes confiar plenamente en nosotros para la elaboración de tu ensayo, con Tesis Vip tienes una aprobación asegurada.',
      },
      {
        question: '¿Por qué nosotros para tu Monografía?',
        answer:
          'En primer lugar, nuestro servicio es 100% confidencial y seguro, tu tranquilidad es muy importante para nosotros. Además, contamos con un equipo de asesores especialistas en Monografía Científica, dispuestos a responder todas tus dudas durante el proceso del desarrollo. Somos los únicos que contamos con la licencia de para de nuestro software facilitaremos el informe anti plagio y garantizarte que su Monografía es único.',
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
        value: 'Miguel Grau, Chaclacayo 15476, Perú',
      },
      { icon: 'telephone', name: 'Celular', value: '+51 930 443 379' },
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
    contactTitle: 'Información de Contacto',
    contactParagraph: 'Nuestros asesores están para ayudarte en todo momento',
    address: 'Miguel Grau, Chaclacayo 15476, Perú',
    email: 'info@tesisvip.com',
    phone: '+51 930 443 379',
    phoneHref: 'tel:+51901724896',
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
    phone: '+51930443379',
  },
};
