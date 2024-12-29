import React from "react";
import Banner from "../Components/Banner";
import BlogPost from "../Components/BlogPost";
import NewsletterSection from "../Components/NewsletterSection ";
import Featured from "../Components/Featured";
import TrendingPosts from "../Components/trendingPosts";
export default function Home() {
  return (
    <div className="font-oswald">
      <Banner />
      <div className="container mx-auto mt-20 px-2 md:px-0">
        <BlogPost />
      </div>
      <div className="container mx-auto mt-24 px-2 md:px-0">
        <Featured />
      </div>
      <div className="container mx-auto mt-24 px-2 md:px-0">
        <TrendingPosts />
      </div>
      <div className="my-8 px-2 md:px-0">
        <NewsletterSection />
      </div>
    </div>
  );
}
