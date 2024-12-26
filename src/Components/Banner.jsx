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
            <div className="absolute bg-opacity-40 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2">
              <h2 className="text-white font-extrabold text-2xl md:text-4xl">
              Welcome to the Future of Blogging
              </h2>
              <p className="text-base  font-bold text-gray-200/90 max-w-2xl mx-auto">
              Explore engaging content and a seamless user experience built with the latest technologies like React and Firebase.
              </p>
              <button className="btn text-white bg-cyan-500 border-none hover:bg-cyan-600">Explore More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain"
              src={banner2}
              alt=""
            />
            <div className="absolute bg-opacity-40 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2">
              <h2 className="text-white font-extrabold text-2xl md:text-4xl">
              Welcome to the Future of Blogging
              </h2>
              <p className="text-base  font-bold text-gray-200/90 max-w-2xl mx-auto">
              Explore engaging content and a seamless user experience built with the latest technologies like React and Firebase.
              </p>
              <button className="btn text-white bg-cyan-500 border-none hover:bg-cyan-600">Explore More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] bg-contain"
              src={banner3}
              alt=""
            />
            <div className="absolute bg-opacity-40 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2">
              <h2 className="text-white font-extrabold text-2xl md:text-4xl">
              Welcome to the Future of Blogging
              </h2>
              <p className="text-base  font-bold text-gray-200/90 max-w-2xl mx-auto">
              Explore engaging content and a seamless user experience built with the latest technologies like React and Firebase.
              </p>
              <button className="btn text-white bg-cyan-500 border-none hover:bg-cyan-600">Explore More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
