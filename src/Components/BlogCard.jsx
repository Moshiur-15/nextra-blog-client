import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
import { FaArrowRight } from "react-icons/fa";
import Img from "../assets/love.avif";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";
export default function BlogCard({ blog }) {
  const { user } = useAuth();
  const {
    title,
    shortDescription,
    category,
    _id,
    cardImage,
    deadline,
    blogPostUser,
  } = blog || {};
  console.log(blog);
  const wishlistData = {
    title,
    cardImage,
    shortDescription,
    category,
    email: user?.email,
    photoURL: blog?.blogPostUser?.photoURL,
    displayName: blog?.blogPostUser?.displayName,
    deadline: deadline,
    job_id: _id,
  };

  const handleWishlist = (wishlist) => {
    if (!user) {
      toast.custom(
        <div className="flex items-center rounded-lg p-3 bg-[#f39c12] text-[#fff]">
          <IoWarning className="bg-" />
          Please log in to add items to your wishlist!
        </div>
      );
      return;
    }
    const fetchData = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_LOCALHOST}/add-wishlist`,
          wishlist
        );
        toast.success("Added to wishlist successfully!");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };
  return (
    <div className="group bg-white relative">
      <div className="flex flex-col h-full">
        <div className="overflow-hidden">
          <img
            src={cardImage}
            className="transition-transform duration-700 group-hover:scale-105 object-cover w-full h-[200px] xl:h-[220px]"
            alt="not found"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          {/* date, user*/}
          <div className="flex justify-between items-center mb-2 px-5 mt-6">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-9 rounded-full"
                  src={blogPostUser?.photoURL}
                  alt=""
                />
              </div>
              <div className="">
                <span className="text-sm">{blogPostUser?.displayName}</span>
                <div className="text-gray-500 text-[12px]">{deadline}</div>
              </div>
            </div>
            <div>
              <span className="bg-[#FAF5E5] text-[#DCA54A] text-[12px] font-semibold px-3 py-1 rounded-full uppercase">
                {category}
              </span>
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl font-semibold px-5">{title}</h2>
          <p className="text-gray-600 text-sm mt-2 mb-4 px-5">
            {shortDescription.slice(0, 110)}...
          </p>
          <div className="flex justify-end">
            <Link
              to={`/blogsDetail/${_id}`}
              className="flex items-center justify-center gap-2 px-8 py-2 bg-[#FAF5E5] text-black border hover:border-transparent relative overflow-hidden transition-all duration-700 group"
            >
              <span className="z-10 relative text-black group-hover:text-white">
                Details
              </span>
              <FaArrowRight className="z-10 relative text-black group-hover:text-white transform -rotate-45 transition-transform duration-700 group-hover:rotate-0" />
              <span className="absolute inset-0 bg-[#DCA54A] transform -translate-x-full transition-all duration-1000 group-hover:translate-x-0"></span>
            </Link>

            <button
              onClick={() => handleWishlist(wishlistData)}
              data-tip="Add to wishlist"
              className="tooltip absolute top-3 right-3 flex items-center justify-center"
            >
              <img
                src={Img}
                className="bg-white h-8 w-8 rounded-full object-contain border p-1"
                alt="not found"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
