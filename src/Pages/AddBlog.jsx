import axios from "axios";
import { Datepicker } from "flowbite-react";
import useAuth from "../hooks/Hook";
const AddBlogs = () => {
  const { user } = useAuth();
  console.log(user);
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
    console.log(addBlog);
    // Add your logic here to save the data to your database
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_LOCALHOST}/add-blogs`,
        addBlog
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg py-10">
      <div className="rounded-md max-w-3xl mx-auto">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer text-center font-lora">
          Add a New Blog
        </h2>
        <p className="mb-14 font-lora max-w-xl mx-auto text-center mt-2">
          Share your thoughts, ideas, or experiences with the world. Write your
          blog post below and publish it for your readers to enjoy!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <section className=" border rounded p-10 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer text-center font-lora">
              Text Part
            </h2>
            <div>
              <label className=" text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Enter blog title"
                required
              />
            </div>

            <div className="md:flex gap-5">
              <div className="flex-1 w-full">
                <label className="block  text-sm font-medium text-gray-700">
                  Blog Post Date
                </label>
                <Datepicker name="deadline" />
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
                name="longDescription"
                rows="5"
                className="mt-1 block w-full bg-gray-400/10 h-[230px] border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Write a detailed description"
                required
              />
            </div>
          </section>

          <section className="py-8 space-y-5 clear-start border rounded p-10 bg-white">
            <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer text-center font-lora">
              Img Section
            </h2>
            <div className="md:flex gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Cover Image
                </label>
                <input
                  type="url"
                  name="cover"
                  className="mt-1 bg-gray-400/10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Card Image
                </label>
                <input
                  type="url"
                  name="cardImage"
                  className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                  placeholder="Enter image URL"
                  required
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
                  className="mt-1 block w-full bg-gray-400/10 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Image 2
                </label>
                <input
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
            className="w-full font-lora bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
