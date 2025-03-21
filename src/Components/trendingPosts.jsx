import React from "react";
import Img1 from "../assets/img1.webp";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.avif";
import Img7 from "../assets/images (6).jpg";
import Img8 from "../assets/unnamed.webp";
import user from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.webp";
import { motion } from "framer-motion";
import Title from "./sherd/Title";

const TrendingPosts = () => {
  const trendingPosts = [
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
      description:
        "AI is enhancing the culinary world by creating innovative recipes, optimizing food preparation, and personalizing meal plans based on individual tastes.",
    },
    {
      title: "The Future of Gaming: How AI Enhances Competitive Play",
      category: "Game",
      name: "Emilys",
      user: `${user2}`,
      image: `${Img8}`,
      description:
        "AI is shaping the future of gaming, from smarter NPCs to predictive analytics for professional gamers.",
    },
    {
      title: "AI in Education: Personalizing Learning Experiences",
      category: "Education",
      name: "Michael Wilson",
      user: `${user}`,
      image: `${Img7}`,
      description:
        "AI tools are transforming education by offering personalized learning, automating grading, and enhancing student engagement.",
    },
  ];

  return (
    <section className="rounded-lg">
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
          <Title fast_text=" Trending" italic="Posts" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {trendingPosts.map((post, inx) => (
            <div key={inx} className="bg-white overflow-hidden group">
              <div>
                <div>
                  <img
                    className="h-60 w-full object-cover"
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
              {/* Text */}
              <section className="p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 transition duration-300 ease-in-out">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">
                    {post.description.slice(0, 80)}...
                  </p>
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