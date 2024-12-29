import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/Hook";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import * as motion from "motion/react-client";
import useAxios from "../hooks/interceptor";
import Loading from "../Components/Loading";
export default function Wishlist() {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosSecure.get(`/wishlist/${user?.email}`);
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleDelete = (id) => {
    const fetchData = async () => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });
        if (result.isConfirmed) {
          await axios.delete(`${import.meta.env.VITE_LOCALHOST}/delete/${id}`);
          const stateUpdate = blogs.filter((blog) => blog._id !== id);
          setBlogs(stateUpdate);
          Swal.fire({
            title: "Deleted!",
            text: "Blog deleted successfully from your wishlist",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  
  return (
    <div className="min-h-[calc(100vh-400px)] mb-12">
      <div className="py-16 bg-cyan-100/80 mb-10">
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
          <h1 className="text-[26px] md:text-4xl hover:text-cyan-600 font-bold text-gray-800 text-center">
            Wishlist Collection
          </h1>
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
            delay: 0.4,
          },
        }}
      >
        <div className={`container mx-auto ${blogs.length > 0 && "bg-gray-100/80"} md:px-8 md:py-8 rounded-lg`}>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <div>
                {blogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-2">
                    {blogs?.map((blog) => (
                      <div
                        key={blog._id}
                        className="bg-white rounded-lg shadow-lg"
                      >
                        <div className="flex flex-col h-full overflow-hidden">
                          <img
                            src={blog.cardImage}
                            className="transition-transform duration-700 hover:scale-105 bg-black bg-opacity-40 inset-0 hover:bg-opacity-45 rounded-t-lg rounded-b-[1px] object-cover w-full h-[200px]"
                            alt="not found"
                          />
                          <div className="flex flex-col justify-between flex-grow p-5">
                            {/* date, user*/}
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-1.5">
                                <span>
                                  <img
                                    className="h-8 w-8 object-fill rounded-full"
                                    src={blog?.photoURL}
                                    alt=""
                                  />
                                </span>
                                <div className="">
                                  {" "}
                                  <span className="text-gray-500 text-md">
                                    {blog?.displayName}
                                  </span>
                                  <p className="text-gray-500 text-xs">
                                    {blog?.deadline}
                                  </p>
                                </div>
                              </div>

                              <span className="bg-cyan-100 text-cyan-700 text-[10px] xl:text-sm font-semibold px-3 py-1 rounded-full uppercase">
                                {blog.category}
                              </span>
                            </div>
                            <h2 className="text-xl lg:text-2xl font-semibold">
                              {blog.title}
                            </h2>
                            <p className="text-gray-600 text-sm mt-2 border-b-2 border-cyan-400 pb-3 border-dashed">
                              {blog.shortDescription.slice(0, 80)}...
                            </p>

                            <div className="flex mt-3">
                              <button
                                color=""
                                className="flex-1 py-1.5 rounded-[5px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold mr-5"
                              >
                                <Link to={`/blogsDetail/${blog?.job_id}`}>
                                  Details
                                </Link>
                              </button>
                              <button
                                color=""
                                onClick={() => handleDelete(blog?._id)}
                                className="flex-1 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-[5px]"
                              >
                                Delate
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-cyan-500 rounded-lg min-h-[calc(100vh-480px)] bg-red-200/50 text-3xl lg:text-5xl flex items-center justify-center">
                    No items in your wishlist. Start adding some!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
