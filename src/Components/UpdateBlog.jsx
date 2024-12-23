import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const UpdateBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/unique-blog/${id}`
      );
      setBlog(data);
    };
    fetchData();
  }, [id]);
  console.log(blog);
  const {
    title,
    shortDescription,
    longDescription,
    deadline,
    cover,
    category,
    cardImage,
    Img2,
    Img1,
  } = blog || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const cardImage = from.cardImage.value;
    const cover = from.cover.value;
    const Img1 = from.Img1.value;
    const Img2 = from.Img2.value;
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
    };
    try {
      await axios.put(
        `${import.meta.env.VITE_LOCALHOST}/unique-blog/${id}`,
        addBlog
      );
      Swal.fire({
        title: "Update",
        text: "Blog Update successfully!",
        icon: "success",
      });
    } catch (err) {
      return toast.error(`${err.message}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg py-10">
      <div className="shadow-md p-10 rounded-md max-w-3xl mx-auto border border-cyan-50">
        <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer text-center font-lora">
          Update A New Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className=" text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Enter blog title"
              required
              defaultValue={title}
            />
          </div>

          <div className="md:flex gap-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Cover Image
              </label>
              <input
                type="url"
                name="cover"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
                defaultValue={cover}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Card Image
              </label>
              <input
                type="url"
                name="cardImage"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
                defaultValue={cardImage}
              />
            </div>
          </div>

          <div className="md:flex gap-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Image 1
              </label>
              <input
                type="url"
                name="Img1"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
                defaultValue={Img1}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Image 2
              </label>
              <input
                type="url"
                name="Img2"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
                defaultValue={Img2}
              />
            </div>
          </div>

          <div className="md:flex gap-5">
            {/* {deadline && <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-700">
                Arrival Date
              </label>
              <Datepicker value={deadline} name="deadline" />
            </div>} */}

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
                defaultValue={category}
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="travel">Travel</option>
                <option value="tech">Tech</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              defaultValue={shortDescription}
              name="shortDescription"
              rows="2"
              className="mt-1 block w-full h-[180px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Write a short description"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Long Description
            </label>
            <textarea
              defaultValue={longDescription}
              name="longDescription"
              rows="5"
              className="mt-1 block w-full h-[300px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Write a detailed description"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
