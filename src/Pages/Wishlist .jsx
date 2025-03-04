import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/Hook";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import useAxios from "../hooks/interceptor";
import Loading from "../Components/Loading";
import { FaTrashAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import img from "../assets/no wishlist data  img.jpeg";

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

  console.log(blogs);
  const handleDelete = (id) => {
    const fetchData = async () => {
      try {
        // Show a confirmation toast
        const confirmToast = new Promise((resolve, reject) => {
          toast(
            (t) => (
              <span>
                Are you sure?
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    resolve(true);
                  }}
                  className="bg-red-500 text-[#DEE4E5] px-3 py-1 rounded ml-2"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    reject(false);
                  }}
                  className="bg-blue-500 text-[#DEE4E5] px-3 py-1 rounded ml-2"
                >
                  No
                </button>
              </span>
            ),
            { duration: Infinity }
          );
        });

        const result = await confirmToast;
        if (result) {
          await axios.delete(`${import.meta.env.VITE_LOCALHOST}/delete/${id}`);

          // Update state after deletion
          const stateUpdate = blogs.filter((blog) => blog._id !== id);
          setBlogs(stateUpdate);

          // Success toast
          toast.success("Blog deleted successfully!");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  return (
    <div className="min-h-[calc(100vh-400px)] mb-12">
      <div className="py-16">
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
          <h1 className="text-[26px] md:text-4xl font-bold text-gray-800 text-center">
            Wishlist Collection
          </h1>
          <p className="text-xl text-center text-gray-600 mt-4">
            Browse your favorite blogs and manage your wishlist!
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
            delay: 0.4,
          },
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container mx-auto">
            {loading ? (
              <Loading />
            ) : blogs.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full bg-white overflow-hidden">
                  <thead className="text-center bg-[#d1a5155c] text-gray-600/90">
                    <tr>
                      <th className="px-6 py-4 border">Blogger</th>
                      <th className="px-6 py-4 border">Name</th>
                      <th className="px-6 py-4 border">Title</th>
                      <th className="px-6 py-4 border">Category</th>
                      <th className="px-6 py-4 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr
                        key={blog._id}
                        className="text-center hover:bg-gray-100 transition-all"
                      >
                        <td className="py-3 border flex justify-center items-center">
                          <img
                            src={blog.photoURL}
                            className="w-12 h-12 object-cover rounded-full shadow-md border-2 border-yellow-500"
                            alt="blogger"
                          />
                        </td>
                        <td className="py-3 border text-gray-800 font-medium">
                          {blog.displayName}
                        </td>
                        <td className="py-3 border text-gray-700">
                          {blog.title}
                        </td>
                        <td className="py-3 border text-gray-600 font-semibold uppercase">
                          {blog.category}
                        </td>
                        <td className="py-3">
                          <div className="flex justify-center gap-4">
                            <Link
                              to={`/blogsDetail/${blog.job_id}`}
                              className="text-blue-500 hover:text-blue-700 text-xl"
                            >
                              <TbListDetails />
                            </Link>
                            <button
                              onClick={() => handleDelete(blog._id)}
                              className="text-red-500 hover:text-red-700 text-xl"
                            >
                              <FaTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="min-h-[calc(100vh-600px)] flex flex-col justify-center items-center">
                <img src={img} className="object-cover w-[600px] h-[400px]" alt="" />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
