import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function BlogPost() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}/blogs`
        );
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* text */}
      <div className="text-center py-6 px-4 md:px-0">
        <h2 className="font-oswald font-bold text-2xl md:text-3xl mb-2">
          Recent Blog Posts
        </h2>
        <p className="font-lora text-base max-w-2xl mx-auto">
          Discover the latest stories, travel guides, and tips from around the
          world. Stay inspired with our handpicked adventures and hidden gems
          waiting to be explored.
        </p>
      </div>

      {/* card */}
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-[100vh]">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#06b6d4"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {blogs?.slice(0, 6).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
