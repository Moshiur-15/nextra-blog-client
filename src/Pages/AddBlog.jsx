import { Datepicker } from "flowbite-react";
import useAuth from "../hooks/Hook";
import Swal from "sweetalert2";
import {motion} from "framer-motion";
import useAxios from "../hooks/interceptor";
import {toast} from 'react-hot-toast'

const AddBlogs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

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
      await axiosSecure.post(`/add-blogs`, addBlog);
      toast.success("Blog Added Successfully!")
      from.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white mb-10">
      <div className="">
        <div className="bg-cyan-100 py-10 mb-6">
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
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 p-3 md:p-10 max-w-[900px] mx-auto shadow-xl"
        >
          <section className="rounded p-10 space-y-4 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-800  cursor-pointer text-center">
              Text Part
            </h2>

            <div>
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Enter blog title"
                required
              />
            </div>

            <div className="md:flex gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Blog Post Date
                </label>
                <Datepicker disabled name="deadline" />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  className="bg-gray-400/10 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
                className="mt-1 block w-full bg-gray-400/10 h-[180px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
                className="mt-1 block w-full bg-gray-400/10 h-[230px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Write a detailed description"
                required
              />
            </div>
          </section>

          <section className="bg-gray-50 py-8 space-y-5 clear-start rounded p-10">
            <h2 className="text-xl font-bold text-gray-800 cursor-pointer text-center">
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
                  className="mt-1 input block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
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
                  className="mt-1 input bg-gray-400/10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
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
                  className="mt-1 input block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
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
                  className="mt-1 input block bg-gray-400/10 w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                  placeholder="Enter image URL"
                  required
                />
              </div>
            </div>
          </section>
          <button
            type="submit"
            className="w-full btn bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-500"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
