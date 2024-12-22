import React from "react";

export default function NewsletterSection(){
  return (
    <section className="relative top-20 lg:top-32 text-white">
      <div className="text-center px-6 bg-cyan-600 py-20 container mx-auto rounded-xl">
        <h2 className="lg:text-3xl text-2xl font-bold font-oswald">
          Subscribe to our Newsletter
        </h2>
        <p className="text-base lg:text-lg max-w-xl mx-auto font-roboto opacity-80">
        Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!
        </p>
        <form
          className="flex flex-col sm:flex-row justify-center gap-2 mt-4 max-w-3xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter..."
            className="px-4 py-2 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full sm:w-2/3"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 uppercase btn rounded-none text-white bg-[#111111] border-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

