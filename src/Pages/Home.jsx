import React from "react";
import Banner from "../Components/Banner";
import BlogPost from "../Components/BlogPost";
import NewsletterSection from "../Components/NewsletterSection ";
import TrendingPosts from "../Components/trendingPosts";
import PassionsSection from "../Components/PassionsSection";
import Faq from "../Components/Faq";

export default function Home() {
  return (
    <div className="font-oswald">
      <div>
        <Banner />
      </div>
      <div className="my-8 md:my-12 lg:my-20 container mx-auto px-4 md:px-0">
        <BlogPost />
      </div>
      <div className="">
        <PassionsSection />
      </div>
      <div className="my-8 md:my-12 lg:my-20 container mx-auto px-4 md:px-0">
        <TrendingPosts />
      </div>
      <div className="">
        <Faq/>
      </div>
      <div className="px-4 md:px-6 lg:px-0 my-8 md:my-12 lg:my-20">
        <NewsletterSection />
      </div>
    </div>
  );
}
