import styles from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/imgs/slides/slide1.png";
import slide2 from "../../assets/imgs/slides/slide2.png";
import slide3 from "../../assets/imgs/slides/slide3.png";

export default function Slider() {
  return (
    <div className={styles.slides} data-aos="fade-up" data-aos-delay="400">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img loading="lazy" src={slide1} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={slide2} alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src={slide3} alt="slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
