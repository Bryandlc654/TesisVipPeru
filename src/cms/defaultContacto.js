import ContactoImg from '../assets/img/estudiante-contacto.webp';

const CALENDAR =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ST_cfzAXUmKy1YHXaKWXlgYYgropwbZcXo1SPR-jnE1WBrkB76Mj8YVsUmkmRbopBmMW8o4_k';

export const contactoScope = ['pageHero', 'info', 'socials', 'form', 'map'];

export const defaultContactoContent = {
  pageHero: {
    title: 'Contacto',
  },
  info: {
    guide: 'Medios de atención',
    title1: 'Información de ',
    title2: 'Contacto',
    paragraph:
      'Nuestro equipo de soporte está listo para ayudarte con cualquier duda que puedas tener. ¡No dudes en ponerte en contacto con nosotros!',
    items: [
      { icon: 'geo', name: 'Oficina', value: 'Miguel Grau, Chaclacayo 15476' },
      { icon: 'telephone', name: 'Celular', value: '+51 930 443 379' },
      { icon: 'envelope', name: 'Correo', value: 'info@tesis-vip.com' },
      { icon: 'cameraVideo', name: 'Asesoría', value: 'Agendar ahora' },
    ],
  },
  socials: [
    { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/TesisVip/', target: '_blank' },
    { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tesis_vip/', target: '_blank' },
    { icon: 'tiktok', label: 'Tik Tok', href: 'https://www.tiktok.com/@tesisvipasesorias', target: '_blank' },
    { icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/company/tesis-vip/', target: '_blank' },
    {
      icon: 'youtube',
      label: 'Youtube',
      href: 'https://www.youtube.com/@tesisvip-asesoriamientoyca5851',
      target: '_blank',
    },
  ],
  form: {
    icon: 'headset',
    name: 'Asesoría Personalizada',
    text: 'Diseñado para ofrecerte soluciones adaptadas a tus necesidades específicas',
    cta: { label: 'Agendar ahora', href: CALENDAR, target: '_blank' },
    image: ContactoImg,
    imageAlt: 'Estudiante',
    guide: 'Déjanos tus datos',
    title: 'Contáctanos',
    namePlaceholder: 'Nombres',
    careerPlaceholder: 'Seleccione una carrera',
    phonePlaceholder: 'Celular',
    servicePlaceholder: 'Seleccione un servicio',
    messagePlaceholder: 'Escribe tu mensaje aquí',
    submitLabel: 'Enviar',
    whatsapp: '+51901815850',
    careers: [
      'Ciencias Sociales',
      'Ciencias de la Salud',
      'Ciencias Empresariales',
      'Ingenierías y Arquitectura',
      'Ciencias Biológicas y Agrónomas',
      'Ciencias Básicas',
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
  map: {
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.84857798488!2d-76.8138152!3d-11.984977599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e832af55bf3b%3A0x68ae0a0505825193!2sMiguel%20Grau%2C%20Chaclacayo%2015476!5e0!3m2!1ses!2spe!4v1719786283274!5m2!1ses!2spe',
  },
};
