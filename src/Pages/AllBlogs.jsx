import React, { useEffect, useState } from "react";

import axios from "axios";
import BlogCard from "../Components/BlogCard";
export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_LOCALHOST
        }/blogs?filter=${filter}&&search=${search}`
      );
      setBlogs(data);
    };
    fetchData();
  }, [filter, search]);
  return (
    <div className="container mx-auto my-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          All Blogs
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Browse through our latest blogs, filter by category, or search by
          title.
        </p>
      </div>

      <div className="max-w-sm mb-8 flex flex-col gap-2">
        <div>
          <select
            name="category"
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4 md:mb-0"
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
        <div className="max-w-72">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search blogs by title"
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4 md:mb-0"
          />
        </div>
      </div>

      <div >
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {blogs?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg min-h-[calc(100vh-650px)] bg-gray-200/50 text-3xl text-red-500 flex items-center justify-center">
            No data available...!
          </p>
        )}
      </div>
    </div>
  );
}
