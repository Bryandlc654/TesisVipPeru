import TestimonialImg1 from "../../assets/img/opinion-uno.webp"
import TestimonialImg2 from "../../assets/img/opinion-dos.webp"
import TestimonialImg3 from "../../assets/img/opinion-tres.webp"
import TestimonialImg4 from "../../assets/img/opinion4.webp"
import TestimonialImg5 from "../../assets/img/opinion5.webp"
import TestimonialImg6 from "../../assets/img/opinion6.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="opinions">
          <div className="opinions__content container">
            <div className="opinions__texts center fade-in-fwd">
              <span className="opinions__guide guide">Testimonios</span>
              <h2 className="opinions__title title">
                <span className="one">Nuestros </span>
                <span className="three">Clientes</span>
              </h2>
              <p className="opinions__paragraph paragraph">
                Sus testimonios reflejan la satisfacción y éxito alcanzados gracias a
                nuestro compromiso y dedicación en cada proyecto.
              </p>
            </div>
            <div className="opinions__group fade-in-fwd-delay-three">
              <Swiper className="opinions__slider mySwiper" spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2500,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}>
                <SwiperSlide>
                  <figure className="opinions__figure">
                    <img
                      className="opinions__img"
                      src={TestimonialImg1}
                      loading="lazy"
                      alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="opinions__figure">
                    <img
                      className="opinions__img"
                      src={TestimonialImg2}
                      loading="lazy"
                      alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="opinions__figure">
                    <img
                      className="opinions__img"
                      src={TestimonialImg3}
                      loading="lazy"
                      alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="opinions__figure">
                    <img
                      className="opinions__img"
                      src={TestimonialImg4}
                      loading="lazy"
                      alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="opinions__figure">
                    <img
                      className="opinions__img"
                      src={TestimonialImg5}
                      loading="lazy"
                      alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="opinions__figure">
                    <img
                      className="opinions__img"
                      src={TestimonialImg6}
                      loading="lazy"
                      alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                    />
                  </figure>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Main