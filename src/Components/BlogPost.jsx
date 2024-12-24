import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogPost() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/blogs`
      );
      setBlogs(data);
    }
    fetchData()
  }, []);
  return (
    <div className=" md:mx-10 lg:mx-24 xl:mx-48">
      {/* text */}
      <div className="text-center py-4 px-4 md:px-0">
        <h2 className="font-oswald font-bold text-2xl md:text-3xl mb-2">
          Recent Blog Posts
        </h2>
        <p className="font-lora text-base md:px-10 lg:px-24 xl:px-52">
          Discover the latest stories, travel guides, and tips from around the
          world. Stay inspired with our handpicked adventures and hidden gems
          waiting to be explored.
        </p>
      </div>

      {/* card */}
      <div className="mt-5 space-y-10">
        {blogs?.slice(0, 6).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
