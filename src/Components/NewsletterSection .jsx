import React, { useContext } from "react";
import blog from "../assets/blog-news.jpeg";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";
export default function NewsletterSection() {
  const { user } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    if (!user) {
      toast.custom(
        <div className="flex items-center rounded-lg p-3 bg-[#f39c12] text-[#fff]">
          <IoWarning className="" />
          Please log in to add items to your wishlist!
        </div>
      );
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };
  return (
    <section className="container mx-auto">
      <div
        className="relative bg-cover bg-center h-[300px] lg:h-[350px]"
        style={{
          backgroundImage: `url(${blog})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6 py-20 container mx-auto">
          <h2 className="lg:text-3xl text-2xl font-bold font-oswald text-[#DEE4E5]">
            Subscribe to our Newsletter
          </h2>
          <p className="text-base lg:text-lg max-w-sm mx-auto opacity-80 text-[#DEE4E5] my-1">
            Subscribe to my newsletter for the latest blog posts, tips, & travel
            guides. Let's stay updated!
          </p>
          <form
            onSubmit={handleForm}
            className="flex flex-col sm:flex-row justify-center gap-2 mt-4 max-w-3xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 w-full sm:w-2/3"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 uppercase btn rounded-none text-[#DEE4E5] bg-[#111111] border-none hover:bg-[#060606]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
