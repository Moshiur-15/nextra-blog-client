import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/Hook";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import * as motion from "motion/react-client";
import useAxios from "../hooks/interceptor";
import Loading from "../Components/Loading";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

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
        <div className="container mx-auto md:py-8 rounded-lg">
          {loading ? (
            <Loading />
          ) : blogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table table-zebra table-striped w-full text-left bg-white rounded-lg">
                <thead className="bg-cyan-500 text-white">
                  <tr>
                    <th className="px-4 py-2">Blog Name</th>
                    <th className="px-4 py-2">Deadline</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-gray-100border">
                      <td className="border px-4 py-2 md:flex items-center gap-3">
                        <img
                          src={blog.photoURL}
                          className="w-10 h-10 object-cover rounded-full"
                          alt="blogger"
                        />
                        {blog.displayName}
                      </td>
                      <td className="border px-4 py-2">{blog.deadline}</td>
                      <td className="border px-4 py-2">{blog.title}</td>
                      <td className="border px-4 py-2">{blog.category}</td>
                      <td className="border px-4 py-2">
                        <td className="px-4 py-2 flex justify-center gap-4">
                          <Link
                            to={`/blogsDetail/${blog.job_id}`}
                            className="text-cyan-500 hover:text-cyan-600 text-xl tooltip tooltip-top"
                            data-tip="Edit Blog"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="text-red-500 hover:text-red-600 text-xl tooltip tooltip-top"
                            data-tip="Delete Blog"
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-red-500 rounded-lg min-h-[calc(100vh-480px)] text-3xl lg:text-5xl flex items-center justify-center">
              No items in your wishlist. Start adding some!
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
