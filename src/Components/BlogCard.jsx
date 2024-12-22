import React from "react";
import { Button } from "flowbite-react";
export default function BlogCard({blog}) {
 const {title, shortDescription, image, category} = blog || {}
  return (
    <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <img
          src={image}
          className="object-cover w-full h-48 rounded-t-lg"
          alt="not found"
        />
      </div>
      <div className="p-5">
        <h2  className="text-xl font-lora font-semibold text-gray-800 hover:text-cyan-600 cursor-pointer">
         {title}
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          {shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <p>
           <span className="font-bold font-lora">Category</span>: {category}
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
  );
}
