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
import { CgLogIn } from "react-icons/cg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function BlogDetail() {
  const { user } = useAuth(null);
  const { id } = useParams(null);
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);
  const [commentLoader, setCommentLoader] = useState(false);

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
    setCommentLoader(true);
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
      const { data: comment } = await axios.post(
        `${import.meta.env.VITE_LOCALHOST}/add-comment`,
        commentData
      );

      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/comments/${id}`
      );
      setComments(data);
    } catch (err) {
      console.log(err);
    } finally {
      setCommentLoader(false);
      from.reset();
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
        toast.success("Added to wishlist successfully!");
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    };
    fetchData();
  };

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <section className="space-y-10 mb-10">
          <div className="relative">
            <img
              src={blogs?.cover}
              className="w-full h-[350px] md:h-[320px] lg:h-[400px] xl:h-[460px] object-cover"
              alt="not found"
            />
            <div className="absolute bg-opacity-40 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2">
              <h2 className="text-[#DEE4E5] font-extrabold text-xl md:text-3xl">
                Single Blog
              </h2>
              <p className="text-base md:text-xl font-bold text-gray-200/70">
                Modern & Beautiful Blog Hub Theme
              </p>
            </div>
          </div>

          <div className="container mx-auto py-10">
            {/* card detail */}
            <div className="mx-5 md:mx-10 lg:mx-16 xl:mx-56 p-5 mb-10 border bg-white">
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
                  <h2 className="text-base lg:text-xl font-semibold font-lora flex items-center gap-2 ">
                    <span className="text-black">
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

                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 cursor-pointer font-lora">
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

                <div className="my-4 flex gap-5">
                  <button
                    onClick={() => handleWishlist(wishlistData)}
                    className="px-5 border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
                  >
                    Add To WishList
                  </button>
                  {isBlogOwner && (
                    <button className="px-5 border py-2 bg-[#DCA54A] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transition-all">
                      <Link to={`/updateBlog/${id}`}>Update Blog</Link>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* comment section*/}
            <div className="shadow-md hover:shadow-lg p-10 rounded-md mx-5 md:mx-10 lg:mx-16 xl:mx-56 bg-white">
              <h2 className="text-xl font-bold text-gray-800 cursor-pointer font-oswald mb-3">
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
                    className="px-5 py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all mt-2"
                  >
                    {commentLoader ? (
                      <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                    ) : (
                      "Comment"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* show comment */}
            <div className="p-10 my-8 flex flex-col gap-5 pt-16 mb-8 mx-5 md:mx-10 lg:mx-16 xl:mx-56 bg-white">
              {comments
                ?.slice()
                .reverse()
                .map((com) => (
                  <div key={com._id} className="pb-4">
                    <div className="flex gap-4 items-center">
                      {/* Improved Image Sizing */}
                      <img
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-sm"
                        src={com?.photoURL}
                        alt="Blogger"
                      />
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-semibold text-gray-800 cursor-pointer font-lora">
                          {com?.displayName}
                        </h2>
                        <p className="text-sm text-gray-600">{com?.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
