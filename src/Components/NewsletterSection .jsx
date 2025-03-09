import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";

const NewsletterSection = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;

    if (!user) {
      toast.custom(
        <div className="flex items-center gap-2 rounded-lg p-3 bg-[#f39c12] text-white">
          <IoWarning className="text-xl" /> Please log in to subscribe to the
          newsletter!
        </div>
      );
      setLoading(false); // Reset loading state if the user is not logged in
      return;
    }

    if (!email) {
      toast.custom(
        <div className="flex items-center gap-2 rounded-lg p-3 bg-[#f39c12] text-white">
          <IoWarning className="text-xl" /> Please enter a valid email to
          subscribe!
        </div>
      );
      setLoading(false); // Reset loading state if email is not provided
      return;
    }

    // Assuming you would handle the subscription logic here (like API call)
    toast.success(`Thank you for subscribing to our newsletter!`);
    e.target.reset(); // Reset form fields
    setLoading(false); // Reset loading state after form submission
  };

  return (
    <section className="container mx-auto my-8 md:my-12 lg:my-20 space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-[1550px] mx-auto relative md:bottom-24 xl:bottom-36">
        <img
          src="https://i.ibb.co.com/RpM4HYsB/images-6.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co.com/Kct2bKC9/footer-02.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co.com/hJQKV2wf/footer-03.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co.com/8LzBfbkY/footer-01.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* newsletter section */}
      <div className="md:flex items-center justify-between gap-10">
        {/* text part */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-bold text-gray-700">
            Let’s learn, explore, and thrive together!
          </h2>
          <p className="text-sm md:text-lg text-gray-600 pt-4 md:mt-1 max-w-xl mb-12 sm:mb-0">
            Connect with 4000+ like-minded individuals and be part of a
            community that values growth, curiosity, and empowerment.
          </p>
        </div>

        {/* input form */}
        <form onSubmit={handleForm} className="md:w-1/3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input w-full rounded-none border-gray-300 focus:outline-none focus:ring-0 focus:ring-none bg-[#FAF5E5]"
          />
          <button
            type="submit"
            className="w-full mt-3 bg-[#DCA54A] hover:bg-[#d1af78] text-white font-semibold p-3 transition duration-300"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
