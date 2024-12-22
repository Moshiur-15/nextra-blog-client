import axios from "axios";
const AddBlogs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const image = from.image.value;
    const category = from.category.value;
    const shortDescription = from.shortDescription.value;
    const longDescription = from.longDescription.value;
    const addBlog = {
      title,
      image,
      category,
      shortDescription,
      longDescription,
    };
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
    <div className="bg-white shadow-md rounded-lg p-8">
      <div className="shadow-md p-10 rounded-md max-w-3xl mx-auto border border-cyan-50">
        <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-600 cursor-pointer text-center font-lora">
          Add a New Blog
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:cyan-blue-500 sm:text-sm"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="travel">Travel</option>
              <option value="tech">Tech</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              rows="2"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              placeholder="Write a detailed description"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
