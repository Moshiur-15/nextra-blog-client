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
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
        centeredSlides={true}
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] object-cover"
              src={banner1}
              alt=""
            />
            <h2 className="absolute  text-2xl md:text-3xl left-1/2 top-1/2 -translate-x-1/2 lg:text-2xl font-bold text-white hover:text-cyan-600 cursor-pointer font-lora">
              Welcome Our Side
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain"
              src={banner2}
              alt=""
            />
            <h2 className="absolute  text-2xl md:text-3xl left-1/2 top-1/2 -translate-x-1/2 lg:text-2xl font-bold text-white hover:text-cyan-600 cursor-pointer font-lora">
              Welcome Our Side
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain"
              src={banner3}
              alt=""
            />
            <h2 className="absolute  text-2xl md:text-3xl left-1/2 top-1/2 -translate-x-1/2 lg:text-2xl font-bold text-white hover:text-cyan-600 cursor-pointer font-lora">
              Welcome Our Side
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
