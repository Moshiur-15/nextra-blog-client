import React from "react";
import Img1 from "../assets/img1.webp";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.avif";
import user from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.webp";
import { Button } from "flowbite-react";
import * as motion from "motion/react-client";

const TrendingPosts = () => {
  const trendingPosts = [
    {
      title: "AI-Powered Fitness: Transforming Health and Wellness",
      category: "Health & Fitness",
      name: "Michael Wilson",
      user: `${user}`,
      image: `${Img1}`,
      description:
        "AI is revolutionizing personal health and fitness with personalized workout plans and data-driven insights.",
    },
    {
      title: "The Future of Gaming: How AI Enhances Competitive Play",
      category: "The Game",
      name: "Alice Johnson",
      user: `${user3}`,
      image: `${Img2}`,
      description: "AI is shaping the future of gaming, from smarter NPCs to predictive analytics for professional gamers."
    },
    {
      title: "Smart Living: How AI is Shaping Modern Lifestyles",
      category: "Lifestyle",
      name: "Emily",
      image: `${Img3}`,
      user: `${user2}`,
      description:
        "AI-powered devices and solutions are changing how we live, from smart homes to health management.",
    },
    {
      title: "AI in Education: Personalizing Learning Experiences",
      category: "Education",
      name: "Michael Wilson",
      image: `${Img4}`,
      user: `${user}`,
      description:
        "AI tools are transforming education by offering personalized learning, automating grading, and enhancing student engagement.",
    },
    {
      title: "Food of the Future: AI in Meal Planning and Preparation",
      category: "Food",
      name: "Alice Johnson",
      image: `${Img5}`,
      user: `${user3}`,
      description:
        "AI is revolutionizing the food industry, from recipe recommendations to smart kitchen devices that optimize cooking.",
    },
    {
      title: "AI in Culinary Arts: Revolutionizing Cooking and Recipes",
      category: "Food",
      name: "Emily",
      user: `${user2}`,
      image: `${Img6}`,
      description: "AI is enhancing the culinary world by creating innovative recipes, optimizing food preparation, and personalizing meal plans based on individual tastes."
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-3 md:px-16 rounded-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.5,
            delay: 0.2,
          },
        }}
      >
        <div className="text-center px-4 md:px-0 py-8">
          <h2 className="lg:text-3xl text-2xl font-bold">
            Trending Posts
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            Stay updated with the latest insights, tips, and stories trending
            across the web. Discover what's hot and stay informed!
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.2,
            delay: 0.3,
          },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {trendingPosts.map((post, inx) => (
            <div
              key={inx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div>
                <div className="">
                  <img
                    className="h-60 w-full object-cover"
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
              {/* text */}
              <section className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1.5">
                    <span>
                      <img
                        className="h-10 w-10 object-cover rounded-full"
                        src={post.user}
                        alt=""
                      />
                    </span>
                    <span className="text-gray-500 text-md">{post.name}</span>
                  </div>
                  <span className="bg-cyan-100 text-cyan-700 text-[10px] xl:text-sm font-semibold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition duration-300 ease-in-out">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description.slice(0,100)}...</p>
                  <Button className="cursor-not-allowed bg-cyan-500 hover:bg-cyan-600 text-white">
                    Post Details
                  </Button>
                </div>
              </section>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrendingPosts;
