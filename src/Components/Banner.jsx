import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../assets/travel-blog-b1.png";
import banner2 from "../assets/travel-blog-b2.jpg";
import banner3 from "../assets/travel-blog-b3.jpg";
export default function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        centeredSlides={true}
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain" src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
