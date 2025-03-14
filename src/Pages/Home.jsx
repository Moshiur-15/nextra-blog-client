import React from "react";
import Banner from "../Components/Banner";
import BlogPost from "../Components/BlogPost";
import NewsletterSection from "../Components/NewsletterSection ";
import TrendingPosts from "../Components/trendingPosts";
import Faq from "../Components/Faq";
import Categories from "../Components/Categories";

export default function Home() {
  return (
    <div className="font-oswald">
      <div>
        <Banner />
      </div>
      <div className="my-8 md:my-12 lg:my-20 container mx-auto px-4 xl:px-0">
        <BlogPost />
      </div>
      <div className="">
        <Categories />
      </div>
      <div className="my-8 md:my-12 lg:my-20 container mx-auto px-4 xl:px-0">
        <TrendingPosts />
      </div>
      <div className="">
        <Faq/>
      </div>
      <div className="px-4 xl:px-0">
        <NewsletterSection />
      </div>
    </div>
  );
}
