import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../hooks/interceptor";
import { toast } from "react-hot-toast";
const UpdateBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const axiosSecure = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/unique-blog/${id}`
      );
      setBlog(data);
    };
    fetchData();
  }, [id]);

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
      await axiosSecure.put(`/update-blog/${id}`, addBlog);
      toast.success("Blog Update successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-8 mx-4 lg:mx-0">
      <div className="bg-[#FAF5E5] pt-14">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 cursor-pointer text-center font-lora">
          Update You Blog
        </h2>
        <p className="mb-14 font-lora max-w-2xl mx-auto text-center mt-2">
          Edit your existing blog post below. Update the content, images, and
          other details, and publish the changes to share your updated ideas
          with your audience.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white p-3 md:p-6 space-y-4 max-w-4xl mx-auto"
      >
        <section className="py-8 bg-gray-50 space-y-8 clear-start p-10">
          <h2 className="text-xl font-bold text-gray-800 cursor-pointer text-center font-lora">
            Text Part
          </h2>
          <div>
            <label className=" text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Enter blog title"
              required
              defaultValue={title}
            />
          </div>

          <div className="md:flex gap-5">
            {/* <div className="flex-1 w-full">
                <label className="block  text-sm font-medium text-gray-700">
                  Blog Post Date
                </label>
                <Datepicker name="deadline" />
              </div> */}

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                className="bg-gray-400/10 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
                defaultValue={category}
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
              defaultValue={shortDescription}
              name="shortDescription"
              rows="2"
              className="mt-1 block w-full bg-gray-400/10 h-[180px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Write a short description"
              required
              minLength={100}
              maxLength={200}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Long Description
            </label>
            <textarea
              minLength={250}
              defaultValue={longDescription}
              name="longDescription"
              rows="5"
              className="mt-1 block w-full bg-gray-400/10 h-[230px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Write a detailed description"
              required
            />
          </div>
        </section>

        <section className="py-8 bg-gray-50 space-y-8 clear-start p-10">
          <h2 className="text-xl font-bold text-gray-800 cursor-pointer text-center font-lora">
            Img Section
          </h2>
          <div className="md:flex gap-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Card Image
              </label>
              <input
                defaultValue={cardImage}
                type="url"
                name="cardImage"
                className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Details Page Cover Image
              </label>
              <input
                defaultValue={cover}
                type="url"
                name="cover"
                className="mt-1 bg-gray-400/10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
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
                defaultValue={Img1}
                type="url"
                name="Img1"
                className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Details Page Image
              </label>
              <input
                defaultValue={Img2}
                type="url"
                name="Img2"
                className="mt-1 block bg-gray-400/10 w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                placeholder="Enter image URL"
                required
              />
            </div>
          </div>
        </section>
        <button
          type="submit"
          className="w-full border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
