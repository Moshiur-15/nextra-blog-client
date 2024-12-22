import React from "react";
import Img from "../assets/popular_destination_1.jpeg";
import Img2 from "../assets/popular_destination_3.jpeg";
import Img3 from "../assets/popular_destination_4.jpeg";
import Img4 from "../assets/popular_destination_5.jpeg";

export default function Featured() {
  return (
    <div>
      <div className="text-center px-4 md:px-0">
        <h2 className="lg:text-3xl text-2xl font-bold font-oswald">
          Featured Blogs
        </h2>
        <p className="text-base lg:text-lg md:px-10 lg:px-32 xl:px-96 font-lora">
          Read our exclusive blog posts designed to provide you with new
          knowledge and experiences. Start reading today!
        </p>
      </div>
      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="overflow-hidden rounded-lg relative ">
          <img
            className="w-full  h-[470px] transition-transform duration-1000 hover:scale-105"
            src={Img}
            alt="Image not found"
          />
          <div className="absolute bottom-5 left-5">
            <h3 className="text-2xl font-bold font-oswald text-white">
              The Future of Technology
            </h3>
            <p className="text-white mt-2 font-lora">
              Learn how technology is enhancing our lives.
            </p>
            <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg relative ">
          <img
            className="w-full  h-[470px] transition-transform duration-1000 hover:scale-105"
            src={Img2}
            alt="Image not found"
          />
          <div className="absolute bottom-5 left-5 ">
            <h3 className="text-2xl font-bold font-oswald text-white">
              Travel Experiences
            </h3>
            <p className="text-white mt-2 font-lora">
              Explore the best destinations and travel tips.
            </p>
            <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg relative ">
          <img
            className="w-full  h-[470px] transition-transform duration-1000 hover:scale-105"
            src={Img3}
            alt="Image not found"
          />
          <div className="absolute bottom-5 left-5 ">
            <h3 className="text-2xl font-bold font-oswald text-white">
              Personal Development
            </h3>
            <p className="text-white mt-2 font-lora">
              Discover the best ways to improve yourself.
            </p>
            <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg relative ">
          <img
           className="w-full  h-[470px] transition-transform duration-1000 hover:scale-105"
            src={Img4}
            alt="Image not found"
          />
          <div className="absolute bottom-5 left-5 ">
            <h3 className="text-2xl font-bold font-oswald text-white">
              Health and Fitness
            </h3>
            <p className="text-white mt-2 font-lora">
              Learn tips for staying healthy and fit.
            </p>
            <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
