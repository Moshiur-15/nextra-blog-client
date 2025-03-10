import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import Loading from "../Components/Loading";
import NewsletterSection from "../Components/NewsletterSection ";
import img from "../assets/no wishlist data  img.jpeg";
export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_LOCALHOST
          }/blogs?filter=${filter}&&search=${search}`
        );
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [filter, search]);
  return (
    <>
      <div className="py-10 bg-[#FAF5E5]">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.2,
              delay: 0.2,
            },
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
            📚All Blogs Post
          </h1>
          <p className="text-gray-600 text-center mt-3 md:text-lg max-w-lg px-2 mx-auto text-base">
            Explore our collection of insightful blogs. Filter by category or
            search for a specific topic to stay up-to-date.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.2,
            delay: 0.3,
          },
        }}
      >
        <div className="container mx-auto pb-6 sm:pb-14 md:pb-20 lg:pb-36">
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-6 mb-8 p-2">
            <div className="flex-1">
              <select
                name="category"
                onChange={(e) => setFilter(e.target.value)}
                className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                required
                value={filter}
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="">All Category</option>
                <option value="travel">Travel</option>
                <option value="game">The Game</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="entertainment">Entertainment</option>
                <option value="education">Education</option>
                <option value="health">Health & Fitness</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
              </select>
            </div>
            <div className="flex-1">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search blogs by title"
                className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
              />
            </div>
          </div>

          <div>
            {loading ? (
              <Loading />
            ) : (
              <div>
                {blogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-2 xl:p-0">
                    {[...blogs]?.reverse().map((blog) => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center container mx-auto md:mb-36 xl:mb-72">
                    <img
                      src={img}
                      className="object-cover w-full max-h-[550px]"
                      alt=""
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="my-20 px-4 lg:px-0">
        <NewsletterSection />
      </div>
    </>
  );
}
