import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

export default function HomeLayout() {
  return (
    <div className="font-oswald bg-[#FAF5E5]">
      <Navber />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
