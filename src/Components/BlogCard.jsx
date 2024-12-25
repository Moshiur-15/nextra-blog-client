import React from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
import { MdOutlineDateRange } from "react-icons/md";
import { toast } from "react-toastify";
export default function BlogCard({ blog }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { title, shortDescription, category, _id, cardImage, deadline } =
    blog || {};
  const wishlistData = {
    title,
    cardImage,
    shortDescription,
    category,
    email: user?.email,
  };

  const handleWishlist = (wishlist) => {
    const fetchData = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_LOCALHOST}/add-wishlist`,
          wishlist
        );
        alert("data added");
        navigate("/wishlist");
      } catch (err) {
        console.log(err);
        return toast.error(`${err.message}`);
      }
    };
    fetchData();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex flex-col h-full overflow-hidden">
        <img
          src={cardImage}
          className="transition-transform duration-700 hover:scale-105  rounded-t-lg rounded-b-[1px] object-cover w-full h-[250px] xl:h-[240px]"
          alt="not found"
        />
        <div className="flex flex-col justify-between flex-grow p-5">
          {/* date, user*/}
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
          <div className="flex mt-3">
              <Link to={`/blogsDetail/${_id}`} className="rounded-md py-1.5 px-7 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5">Details</Link>

            <button
              color=""
              onClick={() => handleWishlist(wishlistData)}
              className="px-7 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
