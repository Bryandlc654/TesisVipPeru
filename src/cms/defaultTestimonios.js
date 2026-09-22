import TestimonialImg1 from '../assets/img/opinion-uno.webp';
import TestimonialImg2 from '../assets/img/opinion-dos.webp';
import TestimonialImg3 from '../assets/img/opinion-tres.webp';
import TestimonialImg4 from '../assets/img/opinion4.webp';
import TestimonialImg5 from '../assets/img/opinion5.webp';
import TestimonialImg6 from '../assets/img/opinion6.webp';

const ALT = 'Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos';

export const testimoniosScope = ['pageHero', 'opinions'];

export const defaultTestimoniosContent = {
  pageHero: {
    title: 'Testimonios',
  },
  opinions: {
    guide: 'Testimonios',
    title1: 'Nuestros ',
    title2: 'Clientes',
    paragraph:
      'Sus testimonios reflejan la satisfacción y éxito alcanzados gracias a nuestro compromiso y dedicación en cada proyecto.',
    items: [
      { image: TestimonialImg1, alt: ALT },
      { image: TestimonialImg2, alt: ALT },
      { image: TestimonialImg3, alt: ALT },
      { image: TestimonialImg4, alt: ALT },
      { image: TestimonialImg5, alt: ALT },
      { image: TestimonialImg6, alt: ALT },
    ],
  },
};
