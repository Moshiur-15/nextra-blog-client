import { Datepicker } from "flowbite-react";
import useAuth from "../hooks/Hook";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import useAxios from "../hooks/interceptor";
import { toast } from "react-hot-toast";
import { useState } from "react";

const AddBlogs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const cardImage = from.cardImage.value;
    const cover = from.cover.value;
    const Img1 = from.Img1.value;
    const Img2 = from.Img2.value;
    const deadline = from.deadline.value;
    const category = from.category.value;
    const shortDescription = from.shortDescription.value;
    const longDescription = from.longDescription.value;
    const addBlog = {
      title,
      cover,
      cardImage,
      Img1,
      Img2,
      category,
      deadline,
      shortDescription,
      longDescription,
      blogPostUser: {
        photoURL: user?.photoURL,
        email: user?.email,
        displayName: user?.displayName,
      },
    };

    try {
      setLoading(true);
      await axiosSecure.post(`/add-blogs`, addBlog);
      toast.success("Blog Added Successfully!");
      from.reset();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 mb-6 mx-4 lg:mx-auto">
      <>
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
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 cursor-pointer text-center">
            Add a New Blog
          </h2>
          <p className="max-w-xl mx-auto text-center mt-2 text-base md:text-lg">
            Share your thoughts, ideas, or experiences with the world. Write
            your blog post below and publish it for your readers to enjoy!
          </p>
        </motion.div>
      </>
      <div className="bg-white max-w-[900px] mx-auto mt-10">
        <form onSubmit={handleSubmit} className="space-y-8 p-3 md:p-10">
          {/* Text Section */}
          <section className="rounded p-10 space-y-4 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Text Part
            </h2>

            <div>
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                placeholder="Enter blog title"
                required
              />
            </div>

            <div className="md:flex gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Blog Post Date
                </label>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  required
                  readOnly
                  class="input w-full rounded-none focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5] border-[#FAF5E5]"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="travel">Travel</option>
                  <option value="game">The Game</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="education">Education</option>
                  <option value="health">Health & Fitness</option>
                  <option value="food">Food</option>
                  <option value="sports">Sports</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                minLength={100}
                maxLength={200}
                rows="2"
                className="w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                placeholder="Write a short description"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Long Description
              </label>
              <textarea
                minLength={400}
                name="longDescription"
                rows="5"
                className="w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                placeholder="Write a detailed description"
                required
              />
            </div>
          </section>

          {/* Image Section */}
          <section className="bg-gray-50 py-8 space-y-5 rounded p-10">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Img Part
            </h2>

            <div className="md:flex gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Card Image
                </label>
                <input
                  type="url"
                  name="cardImage"
                  className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Details Page Cover Image
                </label>
                <input
                  type="url"
                  name="cover"
                  className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                  placeholder="Enter image URL"
                  required
                />
              </div>
            </div>

            <div className="md:flex gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Details Page Image
                </label>
                <input
                  type="url"
                  name="Img1"
                  className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Details Page Image
                </label>
                <input
                  type="url"
                  name="Img2"
                  className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
                  placeholder="Enter image URL"
                  required
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span>Submit Bloging...</span> // Or a spinner icon here
            ) : (
              "Submit Blog"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
