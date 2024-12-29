import * as motion from "motion/react-client";
import React from "react";
import Img from "../assets/blog-post-img-1.jpg";
import Img2 from "../assets/blog-post-img-2.jpg";
import Img3 from "../assets/blog-post-img-3.jpg";
import Img4 from "../assets/blog-post-img-4.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Featured() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.2,
            delay: 0.2,
          },
        }}
      >
        <div className="text-center px-4 md:px-0 py-8">
          <h2 className="lg:text-3xl text-2xl font-bold">
            Featured Blogs
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            Read our exclusive blog posts designed to provide you with new
            knowledge and experiences. Start reading today!
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.2,
            delay: 0.3,
          },
        }}
      >
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="rounded-lg relative">
            <img
              className="w-full h-[470px] transition-transform duration-1000 hover:scale-105"
              src={Img}
              alt="Image not found"
            />
            <div className="absolute flex flex-col justify-end items-start p-4  bg-black bg-opacity-40 inset-0 hover:bg-opacity-50">
              <h3 className="text-2xl font-bold text-white">
                Pre-Trip Reading & Travel Plans for Amazon, Brazil
              </h3>
              <p className="text-white mt-2">
                Learn how technology is enhancing our lives.
              </p>
              <div>
                <button className=" flex items-center gap-1 mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
                  <span>Read More</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg relative">
            <img
              className="w-full h-[470px] transition-transform duration-1000 hover:scale-105"
              src={Img2}
              alt="Image not found"
            />
            <div className="absolute flex flex-col justify-end items-start p-4  bg-black bg-opacity-40 inset-0 hover:bg-opacity-50">
              <h3 className="text-2xl font-bold text-white">
                The Ultimate Grand Canyon Travel Guide for alpinists
              </h3>
              <p className="text-white mt-2">
                Explore the best destinations and travel tips.
              </p>
              <button className="flex items-center gap-1 mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
                <span>Read More</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg relative">
            <img
              className="w-full  h-[470px] transition-transform duration-1000 hover:scale-105"
              src={Img3}
              alt="Image not found"
            />
            <div className="absolute flex flex-col justify-end items-start p-4  bg-black bg-opacity-40 inset-0 hover:bg-opacity-50">
              <h3 className="text-2xl font-bold text-white">
                Guided Hikes in Iceland – Rhyolite mountain Trail
              </h3>
              <p className="text-white mt-2 ">
                Guided Hikes in Iceland – Rhyolite mountain Trail
              </p>
              <button className="flex items-center gap-1 mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
                <span>Read More</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg relative">
            <img
              className="w-full  h-[470px] transition-transform duration-1000 hover:scale-105"
              src={Img4}
              alt="Image not found"
            />
            <div className="absolute flex flex-col justify-end items-start p-4 bg-black bg-opacity-40 inset-0 hover:bg-opacity-50">
              <h3 className="text-2xl font-bold text-white">
                My Favorite Hiking Trails Around Reykjavík
              </h3>
              <p className="text-white mt-2">
                Learn tips for staying healthy and fit.
              </p>
              <button className="flex items-center gap-1 mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
                <span>Read More</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
