import styles from "./slidesDepoiments.module.css";
import { FaStar } from "react-icons/fa";
import { depoiments } from "../../arrayDepoiments";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function SlidesDepoiments() {
  return (
    <Swiper
      id="depoiments"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
        },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className={styles.container}
      data-aos="zoom-in"
    >
      {depoiments.map((depoiment) => (
        <SwiperSlide key={depoiment.id} className={styles.boxDepoiment}>
          <div className={styles.imgDepoiment}>
            <h2>{depoiment.name[0]}</h2>
          </div>
          <div className={styles.contentDepoiment}>
            <h3>{depoiment.name}</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h4>{depoiment.title}</h4>
            <p>{depoiment.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
