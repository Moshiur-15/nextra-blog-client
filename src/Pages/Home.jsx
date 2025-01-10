import React from "react";
import Banner from "../Components/Banner";
import BlogPost from "../Components/BlogPost";
import NewsletterSection from "../Components/NewsletterSection ";
import Featured from "../Components/Featured";
import TrendingPosts from "../Components/trendingPosts";
export default function Home() {
  return (
    <div className="font-oswald">
      <div>
        <Banner />
      </div>
      <div className="container mx-auto px-2 md:px-0 my-8 md:my-14 lg:my-20">
        <BlogPost />
      </div>
      <div className="container mx-auto px-2 md:px-0">
        <Featured />
      </div>
      <div className="container mx-auto  px-2 md:px-0 my-8 md:my-14 lg:my-20">
        <TrendingPosts />
      </div>
      <div className="my-8 px-2 md:px-0">
        <NewsletterSection />
      </div>
    </div>
  );
}
