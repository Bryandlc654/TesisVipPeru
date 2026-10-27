export const articleScope = ['article'];

const promoDefaults = {
  icon: 'telephone',
  title: 'Llama a Nuestros asesores',
  number: '+51 917 622 183',
  paragraph:
    '¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores y da el primer paso hacia el éxito académico. ¡Haz clic para programar tu sesión!',
  cta: { label: 'Contactar', href: 'https://wa.link/70uspg', target: '_blank' },
};

export const dynamicArticleDefaults = (post = {}) => ({
  article: {
    heroTitle: 'Blog',
    title1: post.title || '',
    title2: '',
    intro: [post.excerpt || ''],
    image: post.coverImage || '',
    imageAlt: post.coverAlt || '',
    sections: [
      {
        blocks: [{ type: 'paragraph', text: 'Escribe aquí el contenido de tu artículo…' }],
      },
    ],
    promo: { ...promoDefaults },
  },
});

export const emptyArticleDefaults = dynamicArticleDefaults;