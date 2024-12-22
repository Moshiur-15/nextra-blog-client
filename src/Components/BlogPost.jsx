import React from "react";
import Img from "../assets/travel-blog-b2.jpg";
import { Button } from "flowbite-react";
export default function BlogPost() {
  return (
    <div>
      {/* text */}
      <div className="text-center py-4 px-4 md:px-0">
        <h2 className="font-oswald font-bold text-2xl md:text-3xl">
          Recent Blog Posts
        </h2>
        <p className="font-lora text-base md:px-10 lg:px-24 xl:px-72">
          {" "}
          Discover the latest stories, travel guides, and tips from around the
          world. Stay inspired with our handpicked adventures and hidden gems
          waiting to be explored.
        </p>
      </div>
      {/* card */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div>
            <img
              src={Img}
              className="object-cover w-full h-48 rounded-t-lg"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 cursor-pointer">
              Blog Title Goes Here
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              This is a brief excerpt or description of the blog post. It gives
              readers a quick idea of the content.
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <p>
                Category <span className="font-medium text-gray-800">....</span>
              </p>
            </div>
            <div className="mt-2 flex">
              <Button
                href="#"
                color=""
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5"
              >
                Details
              </Button>
              <Button
                href="#"
                color=""
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
              >
                add to WishList
              </Button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div>
            <img
              src={Img}
              className="object-cover w-full h-48 rounded-t-lg"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 cursor-pointer">
              Blog Title Goes Here
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              This is a brief excerpt or description of the blog post. It gives
              readers a quick idea of the content.
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <p>
                Category <span className="font-medium text-gray-800">....</span>
              </p>
            </div>
            <div className="mt-2 flex">
              <Button
                href="#"
                color=""
                className="bg-[#3926eb] text-white font-semibold mr-5"
              >
                Details
              </Button>
              <Button
                href="#"
                color=""
                className="bg-[#3926eb] text-white font-semibold"
              >
                add to WishList
              </Button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div>
            <img
              src={Img}
              className="object-cover w-full h-48 rounded-t-lg"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 cursor-pointer">
              Blog Title Goes Here
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              This is a brief excerpt or description of the blog post. It gives
              readers a quick idea of the content.
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <p>
                Category <span className="font-medium text-gray-800">....</span>
              </p>
            </div>
            <div className="mt-2 flex">
              <Button
                href="#"
                color=""
                className="bg-[#3926eb] text-white font-semibold mr-5"
              >
                Details
              </Button>
              <Button
                href="#"
                color=""
                className="bg-[#3926eb] text-white font-semibold"
              >
                add to WishList
              </Button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div>
            <img
              src={Img}
              className="object-cover w-full h-48 rounded-t-lg"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 cursor-pointer">
              Blog Title Goes Here
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              This is a brief excerpt or description of the blog post. It gives
              readers a quick idea of the content.
            </p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <p>
                Category <span className="font-medium text-gray-800">....</span>
              </p>
            </div>
            <div className="mt-2 flex">
              <Button
                href="#"
                color=""
                className="bg-[#3926eb] text-white font-semibold mr-5"
              >
                Details
              </Button>
              <Button
                href="#"
                color=""
                className="bg-[#3926eb] text-white font-semibold"
              >
                add to WishList
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
