import React from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
export default function BlogCard({ blog }) {
  const { title, shortDescription, cover, category, _id } = blog || {};
  const navigate = useNavigate();
  const {user} = useAuth();
  const email = user?.email;
  const handleWishlist = (wishlist) => {
    // const fetchData = async () => {
    //   try {
        const payload = {...wishlist , email}
        console.log(payload)
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
    <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <img
          src={cover}
          className="object-cover w-full h-48 rounded-t-lg"
          alt="not found"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-lora font-semibold text-gray-800 hover:text-cyan-600 cursor-pointer">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          {shortDescription.slice(0, 200)}
        </p>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <p>
            <span className="font-bold font-lora">Category</span>: {category}
          </p>
        </div>
        <div className="mt-4 flex">
          <Button
            href="#"
            color=""
            className="font-lora rounded-[5px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5"
          >
            <Link to={`/blogsDetail/${_id}`}>Details</Link>
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
  );
}
