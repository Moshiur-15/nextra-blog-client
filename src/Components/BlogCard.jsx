import React from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
import { MdOutlineDateRange } from "react-icons/md";
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
    <div className="bg-white rounded-lg shadow-lg ">
      <div>
        <div className="overflow-hidden">
          <img
            src={cardImage}
            className="transition-transform duration-700 hover:scale-105 bg-black bg-opacity-40 inset-0 hover:bg-opacity-45 rounded-t-lg rounded-b-[1px] object-cover w-full h-[350px] md:h-[400px] lg:h-[280px] xl:h-[300px]"
            alt="not found"
          />
        </div>
        <div className="pt-5 pb-10 px-8">
          {/* date, user
           */}
          <div className="flex justify-between items-center mb-2">
            <span className="bg-cyan-100 text-cyan-700 text-[12px] font-semibold px-3 py-1 rounded-full uppercase">
              {category}
            </span>
            <div className="flex items-center gap-[2px] text-gray-500 text-sm">
              <span>
                <MdOutlineDateRange />
              </span>
              <span>{deadline}</span>
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl font-semibold font-lora">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 font-lora border-b-2 border-cyan-400 pb-3 border-dashed">
            {shortDescription}
          </p>

          <div className="mt-4 flex">
            <button
              color=""
              className="rounded-[5px] px-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5"
            >
              <Link to={`/blogsDetail/${_id}`}>Details</Link>
            </button>
            <Button
              color=""
              onClick={() => handleWishlist(blog)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-[5px]"
            >
              WishList
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
