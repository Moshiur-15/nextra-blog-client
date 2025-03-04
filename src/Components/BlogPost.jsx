import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Title from "./sherd/Title";
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
        <div className="text-center py-6 px-4 md:px-0 space-y-3 mb-5">
          <Title fast_text='Resent Blogs' italic='Posts' />
          <p className="text-base max-w-[800px] mx-auto md:text-lg">
            Discover the latest stories, travel guides, and tips from around the
            world. Stay inspired with our handpicked adventures and hidden gems
            waiting to be explored.
          </p>
        </div>
      </motion.div>

      {/* card */}
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div>
              {blogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-2 xl:p-0">
                  {[...blogs]
                    ?.reverse()
                    .slice(0, 8)
                    .map((blog) => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
              ) : (
                <p className="rounded-lg min-h-[calc(100vh-440px)] bg-gray-200/50 text-3xl text-red-500 flex items-center justify-center">
                  blog posts Not available.!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
