import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation, Autoplay } from "swiper";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mb-4">
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src="/hero1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
