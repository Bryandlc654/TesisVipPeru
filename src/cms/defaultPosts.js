import ServiceImg1 from '../assets/img/servicios-uno.webp';
import Tesis2 from '../assets/img/Tesis2.webp';
import Tesis3 from '../assets/img/Tesis3.webp';
import Tesis4 from '../assets/img/Tesis4.webp';
import Tesis5 from '../assets/img/Tesis5.webp';
import Tesis6 from '../assets/img/Tesis6.webp';

const PEXELS =
  'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export const blogScope = ['pageHero', 'blog'];

export const defaultBlogContent = {
  pageHero: { title: 'Blog' },
  blog: {
    guide: 'Consejos útiles',
    title1: 'Nuestro ',
    title2: 'Blog',
    paragraph:
      'En esta sección, ofrecemos recomendaciones y estrategias clave para ayudarte en cada etapa de tu tesis.',
    items: [
      {
        image: ServiceImg1,
        imageAlt: '¿Cómo elegir el Tema de mi Tesis?',
        title: '¿Cómo elegir el Tema de mi Tesis?',
        excerpt:
          'El tema de tesis es el eje central de tu trabajo de investigación,es el asunto o problema específico que te propones abordar.',
        cta: { label: 'Ver más', href: '/ComoElegirTemaTesis', target: '_self' },
      },
      {
        image: Tesis2,
        imageAlt: '¿Cómo estructurar el marco teórico de mi tesis y no morir en el intento?',
        title: '¿Cómo estructurar el marco teórico de mi tesis y no morir en el intento?',
        excerpt:
          'El marco teórico de tu tesis es una pieza fundamental que sustenta tu investigación y le da solidez a tus argumentos.',
        cta: { label: 'Ver más', href: '/Marco-Teorico', target: '_self' },
      },
      {
        image: Tesis3,
        imageAlt: '¿Qué es una tesis universitaria?',
        title: '¿Qué es una tesis universitaria?',
        excerpt:
          'Se trata de un proyecto extenso y complejo que requiere un alto nivel de compromiso, dedicación y habilidades investigativas.',
        cta: { label: 'Ver más', href: '/Tesis-Universitaria', target: '_self' },
      },
      {
        image: Tesis4,
        imageAlt: '¿Cómo escribir las conclusiones?',
        title: '¿Cómo escribir las conclusiones?',
        excerpt:
          'Las conclusiones son la parte final de una tesis donde se sintetizan los resultados, se responde a la pregunta de investigación y se discute la relevancia de los hallazgos.',
        cta: { label: 'Ver más', href: '/Conclusiones', target: '_self' },
      },
      {
        image: Tesis5,
        imageAlt: '¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?',
        title: '¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?',
        excerpt:
          'La introducción es la carta de presentación de tu tesis. Debe ser atractiva, informativa y bien estructurada.',
        cta: { label: 'Ver más', href: '/Como-Escribir-Introduccion-Tesis', target: '_self' },
      },
      {
        image: Tesis6,
        imageAlt: 'El Marco Teórico de una Tesis: Tu Brújula en la Investigación',
        title: 'El Marco Teórico de una Tesis: ',
        excerpt:
          'El marco teórico sería como los planos de esa casa. Te indica qué materiales necesitas, cómo unir las piezas y cuál será el resultado final.',
        cta: { label: 'Ver más', href: '/El-Marco-Teorico', target: '_self' },
      },
    ],
  },
};

const PROMO = {
  icon: 'telephone',
  title: 'Llama a Nuestros asesores',
  number: '+51 930 443 379',
  paragraph:
    '¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores y da el primer paso hacia el éxito académico. ¡Haz clic para programar tu sesión!',
  cta: { label: 'Contactar', href: 'https://wa.link/70uspg', target: '_blank' },
};

const title = (text) => ({ type: 'title', text });
const para = (text, extra = {}) => ({ type: 'paragraph', text, ...extra });
const ul = (items) => ({ type: 'list', ordered: false, items });
const ol = (items) => ({ type: 'list', ordered: true, items });
const b = (bold, text = '') => ({ bold, text });

const rawPosts = {
  'post-1': {
    heroTitle: 'Blog',
    title1: '¿Cómo elegir el tema ',
    title2: 'de mi tesis?',
    intro: [
      'El tema de tesis es el eje central de tu trabajo de investigación. Es el asunto o problema específico que te propones abordar y sobre el cual desarrollarás tu análisis, discusión y conclusiones. Elegir un buen tema de tesis es crucial, para ayudarte en este proceso, te presento algunos consejos:',
    ],
    image: PEXELS,
    imageAlt: '¿CÓMO ELEGIR EL TEMA DE MI TESIS?',
    sections: [
      {
        blocks: [
          title('1. Reflexiona sobre tus intereses y pasiones:'),
          ul([
            b('¿Qué temas te apasionan?'),
            b('¿En qué áreas te sientes más cómodo investigando?'),
            b('¿Qué problemas te gustaría resolver o comprender mejor?'),
          ]),
          para(
            'Elegir un tema que te motive y te genere interés te permitirá mantenerte entusiasmado durante todo el proceso de investigación y escritura.',
          ),
        ],
      },
      {
        blocks: [
          title('2. Considera tu carrera profesional:'),
          ul([
            b('¿Cómo se relaciona el tema con tus objetivos profesionales?'),
            b('¿Te ayudará a adquirir habilidades o conocimientos valiosos para tu futuro laboral?'),
            b('¿Podrás aplicar los resultados de tu investigación en tu campo de trabajo?'),
          ]),
          para(
            'Un tema que esté alineado con tu carrera profesional te permitirá obtener un mayor retorno de la inversión de tiempo y esfuerzo que dedicarás a tu tesis.',
          ),
        ],
      },
      {
        blocks: [
          title('3. Evalúa la viabilidad del tema:'),
          ul([
            b('¿Existe suficiente información y recursos disponibles para investigar el tema?'),
            b('¿Es posible realizar una investigación original y significativa sobre el tema?'),
            b('¿El tema es lo suficientemente específico y delimitado para ser abordado en una tesis?'),
          ]),
          para(
            'Elegir un tema viable te asegurará que puedas completar tu investigación de manera exitosa y obtener resultados relevantes.',
          ),
        ],
      },
      {
        blocks: [
          title('4. Consulta con tu director de tesis o tutor:'),
          ul([
            b('¿Qué temas te recomiendan?'),
            b('¿Qué profesores o investigadores podrían guiarte en este tema?'),
            b('¿Existen recursos o becas disponibles para investigar este tema?'),
          ]),
          para(
            'Tu director de tesis o tutor puede brindarte valiosos consejos y apoyo para elegir un tema adecuado para tu tesis.',
          ),
        ],
      },
      {
        blocks: [
          title('5. Investiga sobre temas potenciales:'),
          ul([
            b('', 'Lee artículos académicos, libros y revistas especializadas.'),
            b('', 'Asiste a seminarios, conferencias y eventos académicos.'),
            b('', 'Habla con expertos en el campo de tu interés.'),
          ]),
          para(
            'Investigar sobre temas potenciales te ayudará a comprender mejor el panorama actual de la investigación y a identificar áreas de interés que aún no han sido exploradas a fondo.',
          ),
        ],
      },
      {
        blocks: [
          title('6. No te apresures en la decisión:'),
          ul([
            b('', 'Tómate tu tiempo para reflexionar sobre las diferentes opciones.'),
            b('', 'Consulta con varias personas y busca diferentes perspectivas.'),
            b('', 'No tengas miedo de cambiar de opinión si encuentras un tema que te motiva más.'),
          ]),
          para(
            'Elegir el tema de tu tesis es un proceso que requiere tiempo y reflexión. No te apresures en la decisión y asegúrate de seleccionar un tema que te inspire y te permita realizar un trabajo de investigación de alta calidad.',
          ),
        ],
      },
    ],
    promo: { ...PROMO },
  },
  'post-2': {
    heroTitle: 'Blog',
    title1: '¿Cómo estructurar el marco teórico ',
    title2: 'de mi tesis y no morir en el intento?',
    intro: [
      'El marco teórico de tu tesis es una pieza fundamental que sustenta tu investigación y le da solidez a tus argumentos. Elaborarlo puede parecer una tarea titánica, pero con la organización y estrategia adecuadas, puedes hacerlo de manera eficiente y sin morir en el intento. Aquí te presento algunos pasos y consejos para estructurar el marco teórico de tu tesis:',
    ],
    image: Tesis2,
    imageAlt: '¿Cómo estructurar el marco teórico de mi tesis?',
    sections: [
      {
        blocks: [
          title('1. Define el alcance del marco teórico:'),
          para(
            'Determina el periodo de tiempo, la región geográfica y las áreas temáticas que abarcará tu revisión de literatura. Esto te ayudará a enfocarte en la información más relevante para tu investigación.',
          ),
        ],
      },
      {
        blocks: [
          title('2. Reúne fuentes de información confiables:'),
          para(
            'Busca libros, artículos científicos, revistas especializadas, tesis doctorales y otras fuentes de información de alta calidad. Asegúrate de que las fuentes sean confiables y relevantes para tu tema de investigación.',
          ),
        ],
      },
      {
        blocks: [
          title('3. Clasifica y organiza la información:'),
          para(
            'Utiliza un sistema de clasificación que te permita organizar la información por temas, autores, conceptos clave o metodologías. Esto te ayudará a encontrar la información que necesitas de manera rápida y eficiente.',
          ),
        ],
      },
      {
        blocks: [
          title('4. Elabora un esquema o mapa mental:'),
          para(
            'Visualiza la estructura del marco teórico utilizando un esquema o mapa mental. Esto te ayudará a identificar las relaciones entre los diferentes conceptos y temas que abordarás.',
          ),
        ],
      },
      {
        blocks: [
          title('5. Redacta el marco teórico:'),
          para(
            'Comienza con una introducción que presente el tema de investigación y la importancia del marco teórico. Luego, desarrolla cada uno de los temas o subtemas que has identificado, utilizando un lenguaje claro y conciso. Asegúrate de citar correctamente todas las fuentes de información que utilices.',
          ),
        ],
      },
      {
        blocks: [
          title('6. Revisa y edita tu trabajo:'),
          para(
            'Relee cuidadosamente tu marco teórico para identificar errores gramaticales, ortográficos o de estilo. También asegúrate de que la información esté bien organizada y que fluya de manera lógica.',
          ),
        ],
      },
      {
        blocks: [
          para('¡Recuerda!', { bold: true }),
          ul([
            b(
              'La paciencia es clave:',
              'El marco teórico requiere tiempo, dedicación y esfuerzo. No te desanimes si encuentras dificultades en el camino.',
            ),
            b(
              'La organización es fundamental:',
              'Utiliza herramientas y estrategias que te permitan organizar la información de manera eficiente.',
            ),
            b(
              'La consulta es esencial:',
              'No dudes en consultar a tu director de tesis, profesores, compañeros o buscar asesoría externa si tienes dudas o necesitas apoyo.',
            ),
          ]),
        ],
      },
    ],
    promo: { ...PROMO },
  },
  'post-3': {
    heroTitle: 'Blog',
    title1: '¿Qué es una tesis ',
    title2: 'universitaria?',
    intro: [
      'Una tesis universitaria es un trabajo de investigación final que los estudiantes deben realizar para obtener un título de grado, maestría o doctorado. Se trata de un proyecto extenso y complejo que requiere un alto nivel de compromiso, dedicación y habilidades investigativas.',
      'El objetivo principal de una tesis es demostrar que el estudiante ha adquirido las competencias necesarias para realizar una investigación original y aportar conocimiento nuevo a su campo de estudio. La tesis debe ser un trabajo original, riguroso y metodológicamente sólido, que presente hallazgos relevantes y contribuya a la comprensión de un tema específico.',
    ],
    image: Tesis3,
    imageAlt: '¿Cómo estructurar el marco teórico de mi tesis?',
    sections: [
      {
        blocks: [
          title('Tipos de tesis universitarias:'),
          ul([
            b(
              'Tesis de investigación:',
              'Son las más comunes y se basan en la realización de un estudio original que busca responder a una pregunta de investigación.',
            ),
            b(
              'Tesis de compilación:',
              'Se basan en la recopilación y análisis de información existente sobre un tema específico.',
            ),
            b(
              'Tesis de intervención:',
              'Proponen una solución a un problema o una mejora a una situación existente mediante la implementación de una intervención o programa.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('Estructura de una tesis universitaria:'),
          ul([
            b(
              'Introducción:',
              'Presenta el tema de investigación, la pregunta de investigación, los objetivos y la metodología del estudio.',
            ),
            b(
              'Marco teórico:',
              'Revisa la literatura existente sobre el tema de investigación y presenta las teorías y conceptos relevantes.',
            ),
            b(
              'Metodología:',
              'Describe en detalle los métodos y técnicas utilizados para realizar la investigación.',
            ),
            b('Resultados:', 'Presenta los hallazgos del estudio de manera clara y organizada.'),
            b(
              'Discusión:',
              'Analiza los resultados del estudio en relación con el marco teórico y la literatura existente.',
            ),
            b(
              'Conclusiones:',
              'Presenta las conclusiones principales del estudio y destaca su contribución al conocimiento.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('Consejos para escribir una tesis:'),
          ul([
            b('', 'Elige un tema que te apasione y que sea relevante para tu campo de estudio.'),
            b('', 'Realiza una investigación exhaustiva sobre el tema de tu tesis.'),
            b('', 'Desarrolla un plan de trabajo claro y organizado.'),
            b('', 'Escribe de manera clara, concisa y precisa.'),
            b('', 'Cita tus fuentes correctamente.'),
            b('', 'Revisa tu tesis cuidadosamente antes de presentarla.'),
          ]),
        ],
      },
    ],
    promo: { ...PROMO },
  },
  'post-4': {
    heroTitle: 'Blog',
    title1: '¿Cómo escribir las conclusiones ',
    title2: 'de una tesis?',
    intro: [
      'Las conclusiones son la parte final de una tesis donde se sintetizan los resultados, se responde a la pregunta de investigación y se discute la relevancia de los hallazgos. Es una sección fundamental para comunicar de manera efectiva los aportes del estudio y su contribución al conocimiento científico.',
    ],
    image: Tesis4,
    imageAlt: 'Cómo escribir las conclusiones de una tesis',
    sections: [
      {
        blocks: [
          title('Pasos para escribir las conclusiones de tu tesis'),
          ol([
            b(
              'Revisa tus objetivos e hipótesis:',
              'Vuelve a leer los objetivos específicos que te planteaste al inicio de tu investigación y las hipótesis que buscabas comprobar. Esto te permitirá evaluar en qué medida lograste tus metas.',
            ),
            b(
              'Resume tus hallazgos principales:',
              'Sin entrar en demasiado detalle, resume de manera clara y concisa los resultados más importantes que obtuviste en tu investigación. Enfócate en aquellos que responden directamente a tus objetivos.',
            ),
            b(
              'Responde a tu pregunta de investigación:',
              'La conclusión debe dar una respuesta clara y concisa a la pregunta de investigación que planteaste al inicio de tu trabajo.',
            ),
            b(
              'Evalúa tus hipótesis:',
              'Indica si tus hipótesis fueron confirmadas, refutadas o parcialmente confirmadas por los resultados obtenidos.',
            ),
            b(
              'Discute la relevancia de tus hallazgos:',
              'Explica por qué tus resultados son importantes y cómo contribuyen al conocimiento existente en tu campo de estudio.',
            ),
            b(
              'Menciona las limitaciones de tu investigación:',
              'Sé honesto y reconoce las limitaciones de tu estudio, como el tamaño de la muestra, las variables no controladas, etc.',
            ),
            b(
              'Propón futuras líneas de investigación:',
              'Sugiere posibles direcciones futuras para la investigación en tu área, basadas en los resultados de tu trabajo.',
            ),
            b(
              'Redacta de forma clara y concisa:',
              'Utiliza un lenguaje claro y conciso, evitando tecnicismos innecesarios. Organiza tus ideas de manera lógica y coherente.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('Una estructura típica para las conclusiones podría ser:'),
          ul([
            b(
              'Introducción:',
              'Retoma brevemente la pregunta de investigación y los objetivos del estudio.',
            ),
            b(
              'Resumen de los hallazgos principales:',
              'Presenta los resultados más relevantes de forma concisa.',
            ),
            b(
              'Respuesta a la pregunta de investigación:',
              'Ofrece una respuesta clara y concisa a la pregunta de investigación.',
            ),
            b(
              'Evaluación de las hipótesis:',
              'Indica si las hipótesis fueron confirmadas o refutadas.',
            ),
            b(
              'Relevancia de los hallazgos:',
              'Explica la importancia de los resultados obtenidos.',
            ),
            b('Limitaciones del estudio:', 'Menciona las limitaciones de la investigación.'),
            b(
              'Futuras líneas de investigación:',
              'Propón sugerencias para futuras investigaciones.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('Ejemplo'),
          ul([
            b(
              '',
              'En conclusión, los resultados de este estudio demuestran que existe una relación significativa entre el nivel de estrés percibido y el rendimiento académico en estudiantes universitarios. Esta investigación confirma las hipótesis planteadas y contribuye a una mejor comprensión de los factores que influyen en el rendimiento académico. Sin embargo, es importante destacar que este estudio se llevó a cabo con una muestra limitada y en un contexto específico, por lo que los resultados no pueden generalizarse a toda la población estudiantil. Futuras investigaciones podrían explorar la relación entre el estrés y el rendimiento académico en diferentes disciplinas y culturas.',
              { italic: true },
            ),
          ]),
        ],
      },
    ],
    promo: { ...PROMO },
  },
  'post-5': {
    heroTitle: 'Blog',
    title1: '¿Cómo escribir la introducción de una tesis ',
    title2: 'en corto tiempo y sin dificultades?',
    intro: [
      'La introducción es la carta de presentación de tu tesis. Debe ser atractiva, informativa y bien estructurada para captar la atención del lector y guiarle a través de tu investigación. Aquí te presento una guía concisa para que elabores una introducción sólida en poco tiempo.',
    ],
    image: Tesis5,
    imageAlt: '¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?',
    sections: [
      {
        blocks: [
          title('1. Comienza por el final:'),
          ul([
            b(
              '¿Cuál es tu conclusión principal?',
              'Antes de escribir la introducción, ten muy claro cuál es la respuesta a tu pregunta de investigación.',
            ),
            b(
              '¿Qué preguntas respondiste?',
              'Identifica los objetivos específicos que lograste con tu investigación.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('2. Estructura tu introducción:'),
          ul([
            b(
              'Gancho:',
              'Inicia con una frase impactante o una pregunta interesante que capte la atención del lector y lo motive a seguir leyendo.',
            ),
            b(
              'Contexto:',
              'Presenta el tema de manera general, ofreciendo una visión amplia del problema que estás investigando.',
            ),
            b(
              'Problema de investigación:',
              'Define claramente el problema específico que abordas en tu tesis.',
            ),
            b(
              'Justificación:',
              'Explica por qué tu investigación es relevante y qué aporta al conocimiento existente.',
            ),
            b('Objetivos:', 'Enuncia los objetivos específicos de tu estudio.'),
            b('Hipótesis:', 'Si las tienes, preséntalas de manera clara y concisa.'),
            b(
              'Estructura del trabajo:',
              'Ofrece una breve descripción de cómo está organizada tu tesis.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('3. Escribe con claridad y concisión:'),
          ul([
            b('Lenguaje sencillo:', 'Evita tecnicismos excesivos y utiliza un lenguaje claro y directo.'),
            b('Oraciones cortas:', 'Facilita la comprensión del lector.'),
            b('Párrafos bien estructurados:', 'Cada párrafo debe tratar una idea principal.'),
            b(
              'Coherencia:',
              'Asegúrate de que las ideas fluyan de manera lógica y estén conectadas entre sí.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('4. Revisa y edita:'),
          ul([
            b(
              'Corrección ortográfica y gramatical:',
              'Utiliza herramientas de revisión para asegurarte de que tu texto esté libre de errores.',
            ),
            b('Claridad y concisión:', 'Elimina cualquier información redundante o innecesaria.'),
            b(
              'Coherencia:',
              'Verifica que todas las partes de la introducción estén conectadas y contribuyan a la comprensión del lector.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('Ejemplo de estructura'),
          ol([
            b(
              'Gancho:',
              'El uso excesivo de dispositivos móviles ha generado preocupación por sus efectos en la salud mental de los adolescentes.',
            ),
            b(
              'Contexto:',
              'En las últimas décadas, la tecnología ha transformado la forma en que nos comunicamos e interactuamos.',
            ),
            b(
              'Problema:',
              'Se desconoce el impacto del uso intensivo de redes sociales en la autoestima de los adolescentes.',
            ),
            b('Justificación:', 'Esta investigación es relevante porque...'),
            b('Objetivos:', 'El objetivo de este estudio es...'),
            b('Hipótesis:', 'Se plantea que...'),
            b('Estructura:', 'Este trabajo se divide en cinco capítulos...'),
          ]),
        ],
      },
      {
        blocks: [
          title('Consejos adicionales:'),
          ul([
            b(
              'Sé específico:',
              'Evita generalizaciones vagas y utiliza datos concretos para respaldar tus afirmaciones.',
            ),
            b(
              'Cita fuentes:',
              'Si utilizas información de otros autores, asegúrate de citarlas correctamente.',
            ),
            b(
              'Adapta el tono:',
              'El tono de tu introducción debe ser formal y académico, pero también atractivo para el lector.',
            ),
            b(
              'Pide feedback:',
              'Solicita la opinión de tu tutor o de otros colegas para mejorar tu introducción.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          para(
            'Aunque se coloca al principio de la tesis, es recomendable escribirla después de haber desarrollado el resto del trabajo. De esta manera, tendrás una visión más clara del conjunto y podrás redactar una introducción más precisa y coherente.',
            { bold: true },
          ),
        ],
      },
    ],
    promo: { ...PROMO },
  },
  'post-6': {
    heroTitle: 'Blog',
    title1: 'El Marco Teórico de una Tesis: ',
    title2: 'Tu Brújula en la Investigación',
    intro: [],
    image: Tesis6,
    imageAlt: 'El Marco Teórico de una Tesis: Tu Brújula en la Investigación',
    sections: [
      {
        blocks: [
          title('¿Qué es un marco teórico?'),
          para(
            'Imagina que estás construyendo una casa. El marco teórico sería como los planos de esa casa. Te indica qué materiales necesitas, cómo unir las piezas y cuál será el resultado final. En una tesis, el marco teórico es ese conjunto de conceptos, teorías y estudios previos que te servirán de guía para investigar tu tema.',
          ),
        ],
      },
      {
        blocks: [
          title('¿Por qué es importante el marco teórico?'),
          ol([
            b(
              'Orientación:',
              'Te proporciona una dirección clara para tu investigación. Al conocer las teorías existentes, puedes identificar los vacíos de conocimiento y enfocar tu estudio en un aspecto específico.',
            ),
            b(
              'Justificación:',
              'Demuestra que tu investigación es relevante y necesaria. Al conectar tu trabajo con estudios anteriores, justificas por qué es importante abordar tu tema en particular.',
            ),
            b(
              'Consistencia:',
              'Ayuda a mantener la coherencia en tu investigación. Al basarte en teorías sólidas, evitas contradicciones y garantizas que tus conclusiones sean lógicas.',
            ),
            b(
              'Definición de conceptos:',
              'Clarifica el significado de los términos clave que utilizarás en tu investigación. Esto evita malentendidos y facilita la comunicación de tus ideas.',
            ),
            b(
              'Metodología:',
              'Te ayuda a seleccionar la metodología más adecuada para tu estudio. Al conocer los enfoques utilizados en investigaciones similares, puedes elegir el que mejor se adapte a tus objetivos.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          title('¿Cómo construir un buen marco teórico?'),
          ol([
            b(
              'Revisión bibliográfica:',
              'Investiga a fondo sobre tu tema. Busca artículos científicos, libros, tesis y otros documentos relevantes.',
            ),
            b(
              'Selección de teorías:',
              'Identifica las teorías que mejor se ajustan a tu tema de investigación.',
            ),
            b(
              'Análisis y síntesis:',
              'Analiza cada fuente y sintetiza la información más relevante.',
            ),
            b(
              'Relación entre teorías:',
              'Establece las conexiones entre las diferentes teorías y cómo se relacionan con tu investigación.',
            ),
            b(
              'Estructura clara:',
              'Organiza tu marco teórico de forma lógica y coherente.',
            ),
          ]),
        ],
      },
      {
        blocks: [
          para(
            'el marco teórico es una herramienta fundamental en cualquier investigación. Te brinda la base sólida que necesitas para llevar a cabo un estudio riguroso y original. ¡Así que no lo subestimes!',
            { prefix: 'En resumen,' },
          ),
        ],
      },
    ],
    promo: { ...PROMO },
  },
};

export const articleScope = ['article'];

export const articleDefaults = (slug) => ({ article: rawPosts[slug] });

export const defaultPosts = rawPosts;

export const articleOptions = [
  { slug: 'post-1', label: '¿Cómo elegir el tema de mi tesis?' },
  { slug: 'post-2', label: 'Marco teórico: cómo estructurarlo' },
  { slug: 'post-3', label: '¿Qué es una tesis universitaria?' },
  { slug: 'post-4', label: '¿Cómo escribir las conclusiones?' },
  { slug: 'post-5', label: '¿Cómo escribir la introducción?' },
  { slug: 'post-6', label: 'El Marco Teórico: tu brújula' },
];
