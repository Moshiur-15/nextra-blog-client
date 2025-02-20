import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
import Loading from "./Loading";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";
export default function BlogDetail() {
  const { user } = useAuth(null);
  const { id } = useParams(null);
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}/unique-blog/${id}`
        );
        setBlogs(data);
        setLoader(false);
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.custom(
        <div className="flex items-center rounded-lg p-3 bg-[#f39c12] text-[#fff]">
          <IoWarning className="bg-" />
          Please login and Comment
        </div>
      );
      return;
    }
    const from = e.target;
    const comment = from.comment.value;
    const addComment = {
      comment,
    };

    try {
      const commentData = {
        ...addComment,
        blog_id: id,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      };
      await axios.post(
        `${import.meta.env.VITE_LOCALHOST}/add-comment`,
        commentData
      );

      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/comments/${id}`
      );
      setComments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const ownerMail = blogs?.blogPostUser?.email;
  const isBlogOwner = ownerMail === user?.email;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/comments/${id}`
      );
      setComments(data);
    };
    fetchData();
  }, [id]);

  const wishlistData = {
    title: blogs?.title,
    cardImage: blogs?.cardImage,
    shortDescription: blogs?.shortDescription,
    category: blogs?.category,
    email: user?.email,
    photoURL: blogs?.blogPostUser?.photoURL,
    displayName: blogs?.blogPostUser?.displayName,
    deadline: blogs?.deadline,
    job_id: blogs?._id,
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
        toast.success('Added to wishlist successfully!');
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    };
    fetchData();
  };

  return (
    <div>
      {loader ? (
        <Loading />
      ) : (
        <section className="space-y-10">
          <div className="relative">
            <img
              src={blogs?.cover}
              className="w-full h-[350px] md:h-[320px] lg:h-[400px] xl:h-[460px] object-cover"
              alt="not found"
            />
            <div className="absolute bg-opacity-40 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2">
              <h2 className="text-white font-extrabold text-xl md:text-3xl">
                Single Blog
              </h2>
              <p className="text-base md:text-xl font-bold text-gray-200/70">
                Modern & Beautiful Blog Hub Theme
              </p>
            </div>
          </div>
          <div className="container mx-auto">
            {/* card detail */}
            <div>
              <div className="mx-5 md:mx-10 lg:mx-16 xl:mx-56 shadow-md hover:shadow-lg p-5 mb-10 rounded-lg">
                <div className="overflow-hidden">
                  <img
                    src={blogs?.cardImage}
                    className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] object-cover rounded-lg shadow-lg duration-700 hover:scale-105"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  {/* date, user */}
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base lg:text-xl font-semibold font-lora flex items-center gap-2 hover:text-cyan-600">
                      <span className="text-cyan-400">
                        <FaUser />
                      </span>
                      <span>{blogs?.blogPostUser?.displayName}</span>
                    </h2>
                    <div className="flex items-center gap-[2px] text-gray-500 text-md">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span>{blogs?.deadline}</span>
                    </div>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-lora">
                    {blogs?.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 font-lora">
                    {blogs?.shortDescription}
                  </p>

                  <div className="grid md:grid-cols-5 gap-3 my-5">
                    <div className="overflow-hidden md:col-span-2">
                      <img
                        src={blogs?.Img1}
                        className=" object-cover w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[320px] rounded-lg shadow-lg duration-700 hover:scale-105"
                        alt=""
                      />
                    </div>
                    <div className="overflow-hidden md:col-span-3">
                      <img
                        src={blogs?.Img2}
                        className=" object-cover w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[320px] rounded-lg shadow-lg duration-700 hover:scale-105"
                        alt=""
                      />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 font-lora">
                    {blogs?.longDescription}
                  </p>

                  <div className="my-4 flex">
                    <button
                      onClick={() => handleWishlist(wishlistData)}
                      className="rounded-md ml-2 px-5 md:py-3.5 bg-cyan-500/90 hover:bg-cyan-600/90 text-white font-semibold mr-5 font-lora"
                    >
                      Add To WishList
                    </button>
                    {isBlogOwner && (
                      <button className="rounded-md px-5 md:py-3.5 bg-indigo-500/90 hover:bg-indigo-600/90 text-white font-semibold mr-5 font-lora">
                        <Link to={`/updateBlog/${id}`}>Update Blog</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* comment section*/}
              <div className="shadow-md hover:shadow-lg p-10 rounded-md mx-5 md:mx-10 lg:mx-16 xl:mx-56 ">
                <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-oswald mb-3">
                  Post Comment
                </h2>
                {isBlogOwner ? (
                  <p className="text-gray-500">
                    You cannot comment on your own blog.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <textarea
                        name="comment"
                        rows="4"
                        className="textarea h-52 bg-gray-100 w-full"
                        placeholder="Write Comment"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-5 btn border-none"
                    >
                      Comment
                    </button>
                  </form>
                )}
              </div>

              {/* show comment */}
              <div className="border rounded-lg p-10 my-8 flex flex-col gap-5 pt-16 mb-8 mx-5 md:mx-10 lg:mx-16 xl:mx-56 ">
                {comments?.map((com) => {
                  return (
                    <div key={com._id} className="border-b-2 pb-2">
                      <div className="flex gap-6 ">
                        <div>
                          <img
                            className="object-cover h-14 w-14 rounded-full border-2 border-dashed border-cyan-500 p-1"
                            src={com?.photoURL}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-lora">
                            {com?.displayName}
                          </h2>
                          <p className="text-sm">{com?.comment}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
