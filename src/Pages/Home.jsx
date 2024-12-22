import React from "react";
import Banner from "../Components/Banner";
import BlogPost from "../Components/BlogPost";
import NewsletterSection from "../Components/NewsletterSection ";
import ToursPackages from "../Components/ToursPackages";
import TravelPoint from "../Components/TravelPoint";
import Featured from "../Components/Featured";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto my-8 px-2 md:px-0">
        <BlogPost />
      </div>
      <div className="container mx-auto my-14 px-2 md:px-0">
        <TravelPoint />
      </div>
      <div className="container mx-auto my-8 px-2 md:px-0">
        <ToursPackages />
      </div>
      <div className="container mx-auto my-8 px-2 md:px-0">
        <Featured />
      </div>
      <div className="my-8 px-2 md:px-0">
        <NewsletterSection />
      </div>
    </div>
  );
}
