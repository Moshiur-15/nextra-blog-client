import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import banner1 from "../assets/IMG_0942-2-3_540.jpg";
import banner2 from "../assets/travel-blog-b2.jpg";
import banner3 from "../assets/travel-blog-b3.jpg";

export default function Banner() {
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Welcome to the Future of Blogging",
      description:
        "Explore engaging content and a seamless user experience built with the latest technologies like React and Firebase.",
    },
    {
      id: 2,
      image: banner2,
      title: "Welcome to the Future of Blogging",
      description:
        "Explore engaging content and a seamless user experience built with the latest technologies like React and Firebase.",
    },
    {
      id: 3,
      image: banner3,
      title: "Welcome to the Future of Blogging",
      description:
        "Explore engaging content and a seamless user experience built with the latest technologies like React and Firebase.",
    },
  ];

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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative">
              <img
                className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] object-cover"
                src={banner.image}
                alt=""
              />
              <div className="px-7 md:px-0 absolute bg-opacity-50 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2">
                <motion.h2
                  className="text-white font-extrabold text-2xl md:text-4xl xl:text-5xl mt-16"
                  initial={{ opacity: 0, y: -60 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  {banner.title}
                </motion.h2>
                <motion.p
                  className="text-base lg:text-lg font-bold text-gray-200/90 max-w-lg mx-auto"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  {banner.description}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
