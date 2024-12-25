import axios from "axios";
import React, { useEffect, useState } from "react";
export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}/blogs`
        );
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(blogs);

  return (
    <div className="container mx-auto min-h-[calc(100vh-500px)]">
      <h1>Featured Blogs</h1>
    </div>
  );
}
