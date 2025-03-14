import React from "react";
import Mission from "../Components/About/Mission";
import NewsletterSection from "../Components/NewsletterSection ";

const About = () => {
  return (
    <div className="my-10">
      <section className="text-center container mx-auto px-6 space-y-5">
        <div className="flex flex-row items-center gap-1 justify-center text-2xl uppercase">
          <img
            className="h-8 w-8"
            src="https://i.ibb.co.com/RG80Xq1p/Screenshot-2025-03-09-114756-removebg-preview.png"
            alt=""
          />
          About Me
        </div>
        <h1 className="text-gray-700 uppercase text-2xl sm:text-4xl font-extrabold">
          i`am Junior Mern Stack Developer
        </h1>
        <p className="text-lg max-w-5xl mx-auto">
          Hey, I’m Moshiur—a Front-end & React.js Developer passionate about
          building dynamic and user-friendly web applications. With expertise in
          React.js, Express.js, MongoDB, and Firebase, I’ve worked on projects
          like a game review app and a task management system. I love gaming,
          exploring new technologies, and traveling. Currently, I’m open to
          remote internships and front-end roles!
        </p>
      </section>

      {/* Mission */}
      <Mission />

      {/* newslater */}
      <div className="mt-8 sm:mt-40 lg:mt-72 px-6">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default About;
