import React from "react";
import * as motion from "motion/react-client";
import Img from "../assets/blog-post-img-1.jpg";
import Img2 from "../assets/blog-post-img-2.jpg";
import Img3 from "../assets/blog-post-img-3.jpg";
import Img4 from "../assets/blog-post-img-4.jpg";

export default function Featured() {
  const blogs = [
    {
      id: 1,
      title: "Pre-Trip Reading & Travel Plans for Amazon, Brazil",
      description: "Learn how technology is enhancing our lives.",
      image: `${Img}`,
    },
    {
      id: 2,
      title: "The Ultimate Grand Canyon Travel Guide for Alpinists",
      description: "Explore the best destinations and travel tips.",
      image: `${Img2}`,
    },
    {
      id: 3,
      title: "Guided Hikes in Iceland – Rhyolite Mountain Trail",
      description: "Guided Hikes in Iceland – Rhyolite mountain Trail",
      image: `${Img3}`,
    },
    {
      id: 4,
      title: "My Favorite Hiking Trails Around Reykjavík",
      description: "Learn tips for staying healthy and fit.",
      image: `${Img4}`,
    },
  ];

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
        <div className="text-center px-4 md:px-0">
          <h2 className="lg:text-3xl text-2xl font-bold">Popular Area</h2>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            Explore our curated blogs offering insights, tips, and inspiration
            across diverse topics. Dive in and discover something new!
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
        <section className="px-2 lg:px-0 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="group relative rounded-lg overflow-hidden">
              <img
                className="w-full h-[470px] group-hover:scale-105 transition-transform duration-1000"
                src={blog.image}
                alt="Blog visual"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute z-20 flex flex-col justify-end items-start p-5 inset-0">
                <h3 className="text-2xl font-bold text-white">{blog.title}</h3>
                <p className="text-gray-200 my-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}
