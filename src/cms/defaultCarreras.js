import ServiceImg1 from '../assets/img/economia.webp';
import ServiceImg2 from '../assets/img/salud.webp';
import ServiceImg3 from '../assets/img/administrador.webp';
import ServiceImg4 from '../assets/img/ingeniero.webp';
import ServiceImg5 from '../assets/img/agronomo.webp';

const CTA = { label: 'Contratar', href: 'https://wa.link/70uspg', target: '_blank' };

const howTexts = [
  'Proporcionar estructura o esquema de Tesis',
  'Realizas el Abono Inicial',
  'Realizamos el Contrato de Garantía',
  'Te agregamos al grupo de Whatsapp',
  'Te asesoramos para definir los posibles temas',
  'Proporcionamos los 3 temas para la elección',
  'Eliges un tema junto con tu Asesor',
  'Avance según cronograma',
  'Levantamiento de Observaciones',
  'Asesoría personalizada + explicación de avances',
  'Aprobación de Proyecto de Tesis',
  'Aplicas el tema de Campo',
  'Avanzamos de acuerdo al cronograma',
  'Levantamiento de Observaciones',
  'Asesoría personalizada + explicación de avances',
  'Entrega de documento Final + Porcentaje Turnitin',
  'Aprobación de la Tesis Completa',
];

export const carrerasScope = ['pageHero', 'careers', 'how', 'promo'];

export const defaultCarrerasContent = {
  pageHero: {
    title: 'Carreras',
  },
  careers: {
    guide: 'Carreras',
    title1: 'Somos ',
    title2: 'Especialistas',
    paragraph:
      'Nuestro equipo de expertos está preparado para apoyarte en disciplinas como ciencias sociales, ingeniería, medicina y muchas más.',
    items: [
      { image: ServiceImg1, line1: 'Ciencias', line2: 'Sociales', cta: { ...CTA } },
      { image: ServiceImg2, line1: 'Ciencias', line2: 'de la Salud', cta: { ...CTA } },
      { image: ServiceImg3, line1: 'Ciencias', line2: 'Empresariales', cta: { ...CTA } },
      { image: ServiceImg4, line1: 'Ingenierías y', line2: 'Arquitectura', cta: { ...CTA } },
      { image: ServiceImg5, line1: 'Ciencias Biológicas', line2: 'y Agrónomas', cta: { ...CTA } },
      { image: ServiceImg3, line1: 'Carreras', line2: 'Técnicas', cta: { ...CTA } },
    ],
  },
  how: {
    guide: 'Nuestros procesos',
    title1: '¿Cómo ',
    title2: 'Trabajamos?  ',
    paragraph:
      'Gracias a nuestros procesos detallados y meticulosos, garantizamos el éxito en cada proyecto, asegurando un servicio de alta calidad y satisfacción para todos nuestros clientes',
    items: howTexts.map((text, index) => ({
      number: String(index + 1).padStart(2, '0'),
      text,
    })),
  },
  promo: {
    icon: 'telephone',
    title: 'Llama a Nuestros asesores',
    number: '+51 917 622 183',
    paragraph:
      '¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores y da el primer paso hacia el éxito académico. ¡Haz clic para programar tu sesión!',
    cta: {
      label: 'Agendar ahora',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ST_cfzAXUmKy1YHXaKWXlgYYgropwbZcXo1SPR-jnE1WBrkB76Mj8YVsUmkmRbopBmMW8o4_k',
      target: '_blank',
    },
  },
};
