import { Button } from "flowbite-react";
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
      const resentPost = data.sort((a, b)=>new Date(b.deadline)-new Date(a.deadline))
      setBlogs(resentPost)
    }
    fetchData()
  }, []);
  return (
    <div>
      {/* text */}
      <div className="text-center py-4 px-4 md:px-0">
        <h2 className="font-oswald font-bold text-2xl md:text-3xl">
          Recent Blog Posts
        </h2>
        <p className="font-lora text-base md:px-10 lg:px-24 xl:px-72">
          {" "}
          Discover the latest stories, travel guides, and tips from around the
          world. Stay inspired with our handpicked adventures and hidden gems
          waiting to be explored.
        </p>
      </div>

      {/* card */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {blogs?.slice(0, 6).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
