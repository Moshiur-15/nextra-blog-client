import React from "react";
import Title from "./sherd/Title";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div
      className="bg-cover bg-center py-14 lg:py-20 px-4 xl:px-0"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/Rp0YVrzR/pa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title fast_text="Popular " italic="Categories" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {[
          {
            title: "Travel",
            description:
              "Uncover hidden gems and travel tips for your next adventure.",
            icon: "🌍",
          },
          {
            title: "Education",
            description:
              "Empower yourself with knowledge and educational resources.",
            icon: "📚",
          },
          {
            title: "Sports",
            description:
              "Stay active with tips, news, and insights into your favorite sports.",
            icon: "⚽",
          },
          {
            title: "Health & Fitness",
            description: "Embrace health and balance in your everyday life.",
            icon: "💪",
          },
        ].map((passion, index) => (
          <div
            key={index}
            className="bg-[#fedd9bc1] p-6 text-center mt-4 md:mt-8 shadow-md"
          >
            <div className="text-4xl mb-4">{passion.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {passion.title}
            </h3>
            <p className="text-gray-600">{passion.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link
          to="/allBlogs"
          className="px-10 border py-2 bg-[#DCA54A] hover:border-[#f1b451] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transition-all"
        >
          View All Blog’s
        </Link>
      </div>
    </div>
  );
};

export default Categories;
