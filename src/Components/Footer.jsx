import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-12 pt-44">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <h1 className="text-4xl font-bold text-cyan-500 font-lora">
            Travel Blog
          </h1>
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-8 text-lg font-roboto">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-500 transition duration-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allBlogs"
                  className="text-gray-400 hover:text-cyan-500 transition duration-700"
                >
                  All blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/featuredBlogs"
                  className="text-gray-400 hover:text-cyan-500 transition duration-700"
                >
                  Featured Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-cyan-500">
              About Us
            </h2>
            <p className="text-gray-400">
              Welcome to Travel Blog! Your ultimate guide to discovering
              beautiful destinations, hidden gems, and unique experiences around
              the world.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-cyan-500">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-500 transition duration-700"
                >
                  {" "}
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-500 transition duration-700"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-500 transition duration-700"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-cyan-500">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href=""
                className="text-gray-400 hover:text-cyan-500 transition duration-700"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-cyan-500 transition duration-700"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-cyan-500 transition duration-700"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-cyan-500 transition duration-700"
              >
                <FaPinterestP size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Travel Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
