import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { useCMS } from '../../cms/ContentContext';
import { ImageField, Text } from '../../cms/Editable';

const Main = () => {
  const { get, editMode } = useCMS();
  const opinions = get('opinions') || { items: [] };

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({ threshold: 0 });

  return (
    <main className="main">
      <section className="opinions">
        <div className="opinions__content container">
          <div className={`opinions__texts center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
            <Text path="opinions.guide" as="span" className="opinions__guide guide" />
            <h2 className="opinions__title title">
              <Text path="opinions.title1" as="span" className="one" />
              <Text path="opinions.title2" as="span" className="three" />
            </h2>
            <Text path="opinions.paragraph" as="p" className="opinions__paragraph paragraph" multiline />
          </div>
          <div className="opinions__group fade-in-fwd-delay-three">
            <Swiper
              className="opinions__slider mySwiper"
              spaceBetween={10}
              loop={!editMode}
              autoplay={editMode ? false : { delay: 2500 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 4, spaceBetween: 50 },
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {opinions.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <figure className="opinions__figure">
                    <ImageField
                      path={`opinions.items.${index}.image`}
                      className="opinions__img"
                      loading="lazy"
                      alt={item.alt}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
