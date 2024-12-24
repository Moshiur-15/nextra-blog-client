import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

export default function HomeLayout() {
  return (
    <div className="font-lora">
      <Navber />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
