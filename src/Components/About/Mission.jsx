import React from "react";

const Mission = () => {
  return (
    <section className="flex flex-col md:flex-row items-center my-16 h-[700px] lg:h-[450px] xl:h-[450px] sm:h-[400px]">
      <div className="w-full md:w-1/2 h-full">
        <img
          src="https://i.ibb.co/WWqFW5J0/Screenshot-2025-03-09-121421.png"
          alt="Mission"
          className="w-full h-full"
        />
      </div>

      <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-white px-4 sm:px-6 xl:px-24 py-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 uppercase">
          My Blog’s <span className="text-[#be9b28]">Mission</span>
        </h2>
        <div className="max-w-xl">
          <p className="text-gray-700 mt-4 leading-relaxed text-sm sm:text-lg">
          By subscribing to our newsletter, you’ll be the first to receive our latest articles, expert advice, and exclusive insights to help you grow and succeed in today’s fast-paced world. Don’t miss out on valuable content that will inspire and empower you on your journey.
          </p>
          <p className="text-gray-700 mt-2 text-sm sm:text-lg">
          Join me on this exciting journey as we explore new ideas, embrace change, and work towards a more fulfilling and balanced life, together.
          </p>
        </div>

        {/* Subscribe Button */}
        <div>
          <button className="px-10 py-3 border border-[#f1b451] bg-[#DCA54A] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transition-all mt-3 w-full sm:w-auto">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
