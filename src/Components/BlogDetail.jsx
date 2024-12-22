import React from "react";
import Img from "../assets/travel-blog-b2.jpg";
import { Button } from "flowbite-react";
export default function BlogDetail() {
  return (
    <div className="container mx-auto">
      {/* card */}
      <div>
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div>
            <img
              src={Img}
              className="object-cover w-full h-[400px] rounded-t-lg"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer">
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
                Add to WishList
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
