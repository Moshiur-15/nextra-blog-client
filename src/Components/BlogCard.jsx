import React from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
export default function BlogCard({ blog }) {
  const {
    title,
    shortDescription,
    category,
    _id,
    cardImage,
    deadline,
    blogPostUser,
  } = blog || {};
  const navigate = useNavigate();
  const { user } = useAuth();
  const email = user?.email;
  const handleWishlist = (wishlist) => {
    // const fetchData = async () => {
    //   try {
    const payload = { ...wishlist, email };
    console.log(payload);
    //     const { data } = await axios.post(
    //       `${import.meta.env.VITE_LOCALHOST}/add-wishlist`,
    //       payload
    //     );
    //     console.log(data);
    //     navigate('/wishlist')
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();
  };
  return (
    <div class="bg-white rounded-lg shadow-lg">
      <div>
        <div>
          <img
            src={cardImage}
            className="rounded-t-md rounded-b-[1px] object-cover w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px]"
            alt=""
          />
        </div>
        <div className="pt-5 pb-10 px-8">
          {/* date, user */}
          <div className="flex my-2 items-center">
            <h2 className="mr-1 md:mr-3  text-base lg:text-xl font-normal font-lora text-cyan-600">
              <span>{deadline}</span>
            </h2>
            <h2 className="text-base lg:text-xl font-normal font-lora">
              <span className="border-l-2 border-black"></span>
            </h2>
            <h2 className="ml-1 md:ml-3 text-base lg:text-xl font-normal font-lora">
              By
            </h2>
            <h2 className="ml-1 text-base lg:text-xl font-normal font-lora text-cyan-600">
              <span>{blogPostUser?.displayName}</span>
            </h2>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
          <h2 className="text-base lg:text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-lora">
            {category}
          </h2>
          <p className="text-gray-600 text-sm mt-2 font-lora">
            {shortDescription}
          </p>
          <div className="mt-4 flex">
            <Button
              href="#"
              color=""
              className="font-lora rounded-[5px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5"
            >
              <Link to={`/blogsDetail/${_id}`}>Blog Details</Link>
            </Button>
            <Button
              href="#"
              color=""
              onClick={() => handleWishlist(blog)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold font-lora rounded-[5px]"
            >
              Add to WishList
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
