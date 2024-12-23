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
        `${import.meta.env.VITE_LOCALHOST}/blogs?filter=${filter}&&search=${search}`
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

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-2 md:gap-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search blogs by title"
          className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4 md:mb-0"
        />
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
          <option value="">All category</option>
          <option value="travel">Travel</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
}