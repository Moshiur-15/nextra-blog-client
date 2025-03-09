import React from "react";
import { useContext } from "react";
import blog from "../assets/blog-news.jpeg";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";

const NewsletterSection = () => {
  const { user } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior.

    if (!user) {
      // Checks if the 'user' variable is not defined or falsy.
      toast.custom(
        // Displays a custom toast notification.
        <div className="flex items-center rounded-lg p-3 bg-[#f39c12] text-[#fff]">
          <IoWarning className="" /> {/* Warning icon */}
          Please log in to subscribe to the newsletter!{" "}
          {/* Message displayed */}
        </div>
      );
      return; // Exits the function if the user is not logged in.
    }

    toast.success("Thank you for subscribing to our newsletter!"); // Displays a success toast.
    e.target.reset(); // Resets the form fields after submission.
  };

  return (
    <section className="container mx-auto">
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

      {/* newslater */}
      <div className="md:flex items-center justify-between gap-10">
        {/* text part */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let’s learn, explore, and thrive together!
          </h2>
          <p className="text-sm md:text-lg text-gray-600 mb-4 md:mt-1 max-w-xl">
            Connect with 4000+ like-minded individuals and be part of a
            community that values growth, curiosity, and empowerment.
          </p>
        </div>
        {/* input */}
        <form onSubmit={handleForm} className="md:w-1/3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-[#DCA54A] bg-[#FAF5E5] focus:ring-0 focus:ring-[#FAF5E5] outline-none"
          />
          <button
            type="submit"
            className="w-full mt-3 bg-[#DCA54A] hover:bg-[#d1af78] text-white font-semibold p-3 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

// import React, { useContext } from "react";
// import blog from "../assets/blog-news.jpeg";
// import { AuthContext } from "../Provider/AuthProvider";
// import toast from "react-hot-toast";
// import { IoWarning } from "react-icons/io5";
// export default function NewsletterSection() {
//   const { user } = useContext(AuthContext);
//   const handleForm = (e) => {
//     e.preventDefault();
//     if (!user) {
//       toast.custom(
//         <div className="flex items-center rounded-lg p-3 bg-[#f39c12] text-[#fff]">
//           <IoWarning className="" />
//           Please log in to add items to your wishlist!
//         </div>
//       );
//       return;
//     }
//     toast.success("Thank you for subscribing to our newsletter!");
//     e.target.reset();
//   };
//   return (
//     <section className="container mx-auto">
//       <div
//         className="relative bg-cover bg-center h-[300px] lg:h-[350px]"
//         style={{
//           backgroundImage: url(${blog}),
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center px-6 py-20 container mx-auto">
//           <h2 className="lg:text-3xl text-2xl font-bold font-oswald text-[#DEE4E5]">
//             Subscribe to our Newsletter
//           </h2>
//           <p className="text-base lg:text-lg max-w-sm mx-auto opacity-80 text-[#DEE4E5] my-1">
//             Subscribe to my newsletter for the latest blog posts, tips, & travel
//             guides. Let's stay updated!
//           </p>
//           <form
//             onSubmit={handleForm}
//             className="flex flex-col sm:flex-row justify-center gap-2 mt-4 max-w-3xl mx-auto"
//           >
//             <input
//               type="email"
//               placeholder="Enter your email..."
//               className="px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 w-full sm:w-2/3"
//               required
//             />

//             <button
//               type="submit"
//               className="px-6 py-3 uppercase btn rounded-none text-[#DEE4E5] bg-[#111111] border-none hover:bg-[#060606]"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
