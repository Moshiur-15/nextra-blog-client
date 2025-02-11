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
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg relative">
      <div className="flex flex-col h-full  rounded-lg">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={cardImage}
            className="transition-transform duration-700 group-hover:scale-105  rounded-t-lg rounded-b-[1px] object-cover w-full h-[250px] xl:h-[240px]"
            alt="not found"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-5">
          {/* date, user*/}
          <div className="flex justify-between items-center mb-2">
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
              <span className="bg-cyan-100 text-cyan-700 text-[12px] font-semibold px-3 py-1 rounded-full uppercase">
                {category}
              </span>
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">
            {shortDescription.slice(0, 110)}...
          </p>
          <div className="flex mt-3">
            <div className="mt-2">
              <Link
                to={`/blogsDetail/${_id}`}
                className="px-8 py-1.5 rounded bg-cyan-500 text-white flex items-center space-x-2"
              >
                <span>Details</span>
                <FaArrowRight />
              </Link>
            </div>
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
