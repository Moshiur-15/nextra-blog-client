import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/Hook";
export default function BlogDetail() {
  const { user } = useAuth();
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/unique-blog/${id}`
      );
      setBlogs(data);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const comment = from.comment.value;
    const addComment = {
      comment,
    };
    // Add your logic here to save the data to your database
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

  return (
    <section className="mb-10 space-y-10">
      <div>
        <img
          src={blogs?.cover}
          className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] object-cover"
          alt=""
        />
      </div>
      <div className="container mx-auto space-y-8 bg-white">
        {/* card detail */}
        <div className="mx-5 md:mx-10 lg:mx-56">
          <div className="relative">
            <img
              src={blogs?.cardImage}
              className="object-cover w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px]"
              alt=""
            />
            <button
              type="submit"
              className="absolute top-5 left-5 rounded-md bg-cyan-500 text-white btn border-none font-lora"
            >
              Travel / Tour
            </button>
          </div>
          <div className="mt-5">
            {/* date, user */}
            <div className="flex gap-5 my-2">
              <h2 className="text-base lg:text-xl font-semibold font-lora flex items-center gap-2 hover:text-cyan-600">
                <span className="text-cyan-400">
                  <MdOutlineDateRange />{" "}
                </span>
                <span>{blogs?.deadline}</span>
              </h2>
              <h2 className="text-base lg:text-xl font-semibold font-lora flex items-center gap-2 hover:text-cyan-600">
                <span className="text-cyan-400">
                  <FaUser />
                </span>
                <span>{blogs?.blogPostUser?.displayName}</span>
              </h2>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-lora">
              {blogs?.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 font-lora">
              {blogs?.shortDescription}
            </p>

            <div className="grid md:grid-cols-5 gap-3 my-5">
              <img
                src={blogs?.Img1}
                className="md:col-span-2 object-cover w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[320px]"
                alt=""
              />
              <img
                src={blogs?.Img2}
                className="md:col-span-3 object-cover w-full h-[200px] md:h-[230px] lg:h-[280px] xl:h-[320px]"
                alt=""
              />
            </div>

            <p className="text-gray-600 text-sm mb-5 font-lora">
              {blogs?.longDescription}
            </p>

            <div className="mt-2 flex">
              <Button
                href="#"
                color=""
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold font-lora"
              >
                Add to WishList
              </Button>
              {isBlogOwner && (
                <Button
                  href="#"
                  color=""
                  className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5 font-lora"
                >
                  <Link to={`/updateBlog/${id}`}>Update Blog</Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* comment section*/}
        <div className="shadow-md p-10 rounded-md mx-5 md:mx-10 lg:mx-56">
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
                  rows="5"
                  className="textarea h-52 bg-gray-100 w-full"
                  placeholder="Write Comment"
                  required
                />
              </div>

              <div className="lg:flex gap-5 mt-5">
                <div className="flex-1">
                  <input
                    type="url"
                    name="name"
                    className="mt-1 block w-full bg-gray-100 rounded-md  focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm input"
                    placeholder="Enter Your Name*"
                    required
                    readOnly
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="flex-1 mt-5 lg:mt-0">
                  <input
                    type="url"
                    name="email"
                    className="mt-1 block w-full bg-gray-100 rounded-md  focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm input"
                    placeholder="Enter Email Address*"
                    required
                    readOnly
                    defaultValue={user?.email}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mt-5 btn border-none"
              >
                Post Comment
              </button>
            </form>
          )}
        </div>

        {/* show comment */}
        <div className="flex flex-col gap-5 pt-16 mb-8 mx-5 md:mx-10 lg:mx-56">
          {comments?.map((com) => {
            return (
              <div key={com._id} className="border-b-2 pb-2">
                <div className="flex gap-6 ">
                  <div>
                    <img
                      className="object-cover h-16 w-16 rounded-full border-2 border-dashed border-cyan-500 p-1"
                      src={com?.photoURL}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer font-lora">
                      {com.displayName}
                    </h2>
                    <p className="font-lora">{com.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
