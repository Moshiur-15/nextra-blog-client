import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/Hook";
import UseDropdown from "./UseDropdown";
import logo from "../assets/blogsicon.png";

export default function Navbar() {
  const { user, logOut } = useAuth();

  return (
    <div className="shadow-md py-2 sticky top-0 z-50 bg-[#FAF5E5]">
      <section className="container mx-auto">
        <div className="flex justify-between items-center px-4 md:px-0 py-2">
          <div>
            {/* <img className="rounded-xl w-32 object-cover" src={logo} alt="NextEra Blog Logo" /> */}
            <h2 className="font-bold">Nextra Blog</h2>
          </div>

          <div className="flex justify-center gap-6">
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] font-bold ${
                  isActive ? "text-[#DCA54A] underline" : "text-gray-600"
                }`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] font-bold ${
                  isActive ? "text-[#DCA54A] underline" : "text-gray-600"
                }`
              }
              to="/allBlogs"
            >
              All Blogs
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] font-bold ${
                  isActive ? "text-[#DCA54A] underline" : "text-gray-600"
                }`
              }
              to="/featuredBlogs"
            >
              Featured Blogs
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <UseDropdown user={user} logOut={logOut} />
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
