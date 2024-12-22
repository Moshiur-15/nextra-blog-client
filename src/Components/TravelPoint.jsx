import React from "react";

export default function TravelPoint() {
  return (
    <div>
      <div className="text-center">
        <h2 className="lg:text-2xl text-xl font-semibold font-oswald text-[#12cece]">
          Travel Point
        </h2>
        <h2 className="lg:text-3xl text-2xl font-bold font-oswald ">
          Discover The World With Our Guide
        </h2>
        <p className="text-base lg:text-lg font-lora">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
      </div>
      {/* card section */}
      <section className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="border border-[#12cece] p-10 text-center rounded-lg">
          <h2 className="lg:text-3xl text-2xl font-bold font-oswald text-[#12cece] ">
            502 +
          </h2>
          <p className="text-base lg:text-lg font-lora">
            Holiday Package
          </p>
        </div>
        <div className="border border-[#12cece] p-10 text-center rounded-lg">
          <h2 className="lg:text-3xl text-2xl font-bold font-oswald text-[#12cece] ">
            100+
          </h2>
          <p className="text-base lg:text-lg font-lora">
          Luxury Hotel
          </p>
        </div>
        <div className="border border-[#12cece] p-10 text-center rounded-lg">
          <h2 className="lg:text-3xl text-2xl font-bold font-oswald text-[#12cece] ">
            77k
          </h2>
          <p className="text-base lg:text-lg font-lora">
          Premium Airlines
          </p>
        </div>
        <div className="border border-[#12cece] p-10 text-center rounded-lg">
          <h2 className="lg:text-3xl text-2xl font-bold font-oswald text-[#12cece]">
          2k+
          </h2>
          <p className="text-base lg:text-lg font-lora">
          Happy Customer
          </p>
        </div>
      </section>
    </div>
  );
}
