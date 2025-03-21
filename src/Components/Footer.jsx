import React from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/blogsicon.png";
export default function Footer() {
  return (
    <footer className="bg-white text-[#DEE4E5] py-12">
      <div className="container mx-auto mt-8 md:mt-12 lg:mt-20 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="">
            <img
              className="w-32"
              src={logo}
              alt="NextEra Blog Logo"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-8 md:text-lg">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#DCA54A] transition duration-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allBlogs"
                  className="text-gray-400 hover:text-[#DCA54A] transition duration-700"
                >
                  All blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/featuredBlogs"
                  className="text-gray-400 hover:text-[#DCA54A] transition duration-700"
                >
                  Featured Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#DCA54A]">
              About Us
            </h2>
            <p className="text-gray-400">
              Welcome to{" "}
              <span className="font-bold text-[#DCA54A]">NextEra Blog!</span>{" "}
              Your ultimate guide to discovering beautiful destinations, hidden
              gems, and unique experiences around the world.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#DCA54A]">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#DCA54A] transition duration-700"
                >
                  {" "}
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#DCA54A] transition duration-700"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#DCA54A] transition duration-700"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#DCA54A]">
              Contact Me
            </h2>
            <div className="text-center mt-6">
              <div className="border border-gray-400/60 mb-5"></div>
              <div className="flex space-x-6 mt-6 justify-center md:justify-start">
                {/* Email */}
                <a
                  href="mailto:masiurislam28@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-red-500 hover:text-red-600 transition duration-300"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://wa.me/+8801327023639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500 text-3xl cursor-pointer hover:text-green-600 transition" />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 text-3xl cursor-pointer hover:text-blue-700 transition" />
                </a>

                <a
                  href="https://www.linkedin.com/in/moshiur-islam28/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-500 text-3xl cursor-pointer hover:text-blue-700 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nextra Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}