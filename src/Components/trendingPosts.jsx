import React from "react";
import Img1 from "../assets/travel-blog-b1.png";
import Img2 from "../assets/travel-blog-b2.jpg";
import Img3 from "../assets/travel-blog-b3.jpg";
import Img4 from "../assets/travel-blog-b1.png";
import Img5 from "../assets/travel-blog-b1.png";
import Img6 from "../assets/travel-blog-b1.png";
import { Button } from "flowbite-react";

const TrendingPosts = () => {
  const trendingPosts = [
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img2}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img3}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img1}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img3}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img4}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img5}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
    {
      title: "The Best Practices for Web Accessibility",
      category: "category",
      name: "name",
      image: `${Img6}`,
      description:
        "Ensure that your websites are accessible to everyone, regardless of their abilities.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {trendingPosts.map((post, inx) => (
          <div
            key={inx}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div>
              <div className="">
                <img
                  className="h-56 w-full object-fill"
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
                      className="h-10 w-10 object-fill rounded-full"
                      src={post.image}
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
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Button
                data-tip='Post Not Available'
                  className="tooltip bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                   Post Details
                </Button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPosts;
