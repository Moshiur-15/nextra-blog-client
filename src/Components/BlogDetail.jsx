import React, { useEffect, useState } from "react";
import Img from "../assets/travel-blog-b2.jpg";
import { Button } from "flowbite-react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function BlogDetail() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/blog-details/${id}`
      );
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <section className="mb-10 space-y-10">
      <div>
        <img
          src={blogs?.cover}
          className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] object-cover"
          alt=""
        />
      </div>
      <div className="container mx-auto space-y-8 bg-white">
        {/* card */}
        <div className="mx-5 md:mx-10 lg:mx-56">
          <div className="relative">
            <img
              src={blogs?.cardImage}
              className="object-cover w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px]"
              alt=""
            />
            <button
              type="submit"
              className="absolute top-5 left-5 rounded-md bg-cyan-500 text-white btn border-none font-lora"
            >
              Travel / Tour
            </button>
          </div>
          <div className="mt-5">
            {/* date, user */}
            <div className="flex gap-5 my-2">
              <h2 className="text-base lg:text-xl font-semibold font-lora flex items-center gap-2 hover:text-cyan-600">
                <span className="text-cyan-400">
                  <MdOutlineDateRange />{" "}
                </span>
                <span>{blogs?.deadline}</span>
              </h2>
              <h2 className="text-base lg:text-xl font-semibold font-lora flex items-center gap-2 hover:text-cyan-600">
                <span className="text-cyan-400">
                  <FaUser />
                </span>
                <span>Name</span>
              </h2>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-lora">
              {blogs?.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 font-lora">
              {blogs?.shortDescription}
            </p>

            <div className="grid md:grid-cols-5 gap-3 my-5">
              <img
                src={blogs?.Img1}
                className="md:col-span-2 object-cover w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[320px]"
                alt=""
              />
              <img
                src={blogs?.Img2}
                className="md:col-span-3 object-cover w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[320px]"
                alt=""
              />
            </div>

            <p className="text-gray-600 text-sm mb-5 font-lora">
              {blogs?.longDescription}
            </p>

            <div className="mt-2 flex">
              <Button
                href="#"
                color=""
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5 font-lora"
              >
                Update Blog
              </Button>
              <Button
                href="#"
                color=""
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold font-lora"
              >
                Add to WishList
              </Button>
            </div>
          </div>
        </div>
        {/* show comment */}
        <div className="flex gap-6 mx-5 md:mx-10 lg:mx-56">
          <div>
            <img className="object-cover h-20 w-20 rounded-full" src={blogs?.cover} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-oswald mb-3">User Name</h2>
            <p>user textarea</p>
          </div>
        </div>
        {/* comment section*/}
        <div className="shadow-md p-10 rounded-md mx-5 md:mx-10 lg:mx-56">
          <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-oswald mb-3">
            Post Comment
          </h2>
          <div>
            <textarea
              name="comment"
              rows="5"
              className="textarea h-52 bg-gray-100 w-full"
              placeholder="Write Comment"
              required
            />
          </div>

          <div className="lg:flex gap-5 mt-5">
            <div className="flex-1">
              <input
                type="url"
                name="name"
                className="mt-1 block w-full bg-gray-100 rounded-md  focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm input"
                placeholder="Enter Your Name*"
                required
              />
            </div>
            <div className="flex-1 mt-5 lg:mt-0">
              <input
                type="url"
                name="email"
                className="mt-1 block w-full bg-gray-100 rounded-md  focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm input"
                placeholder="Enter Email Address*"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-5 btn border-none"
          >
            Post Comment
          </button>
        </div>
      </div>
    </section>
  );
}
