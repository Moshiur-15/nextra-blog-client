import * as motion from "motion/react-client";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { toast } from "react-toastify";

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
          <h2 className="font-oswald font-bold text-2xl md:text-3xl mb-2">
            Latest Blog Posts
          </h2>
          <p className="text-base max-w-[950px] mx-auto md:text-lg">
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
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 xl:p-0">
                {[...blogs]
                  ?.reverse()
                  .slice(0, 6)
                  .map((blog) => (
                    <motion.div
                      key={blog._id}
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
                      <BlogCard blog={blog} />
                    </motion.div>
                  ))}
              </div>
            ) : (
              <p className="rounded-lg min-h-[calc(100vh-440px)] bg-gray-200/50 text-3xl text-red-500 flex items-center justify-center">
                Blog posts are not available.!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
