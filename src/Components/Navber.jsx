import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/Hook";
import UseDropdown from "./UseDropdown";
import { IoMenu } from "react-icons/io5";
import { Avatar } from "flowbite-react";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow py-2 sticky top-0 z-50 bg-[#FAF5E5]">
      <section className="container mx-auto">
        <div className="flex justify-between items-center px-4 xl:px-0 py-2">
          <div>
            <h2 className="font-bold text-lg">Nextra Blog</h2>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-2 text-lg font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoMdClose
                size={38}
                className="cursor-pointer bg-white text-black p-1"
              />
            ) : (
              <IoMenu
                size={38}
                className="cursor-pointer bg-white text-black p-1"
              />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center gap-6">
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
            {user && (
              <>
                <UseDropdown user={user} logOut={logOut} />
              </>
            )}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <Avatar
                alt=""
                className="border rounded-full bg-white"
                img={user?.photoURL}
                rounded
              />
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="px-5 border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 border py-2 bg-[#DCA54A] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-2 py-4 space-y-3 text-center">
            <NavLink
              className="block text-gray-600 hover:text-[#DCA54A] font-bold"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              className="block text-gray-600 hover:text-[#DCA54A] font-bold"
              to="/allBlogs"
              onClick={() => setMenuOpen(false)}
            >
              All Blogs
            </NavLink>

            <NavLink
              className="block text-gray-600 hover:text-[#DCA54A] font-bold"
              to="/featuredBlogs"
              onClick={() => setMenuOpen(false)}
            >
              Featured Blogs
            </NavLink>
            {user && (
              <div className="flex flex-col gap-3 text-center">
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-[#DCA54A] font-semibold w-full${
                      isActive ? "text-black underline" : "text-black"
                    }`
                  }
                  to="/addBlog"
                >
                  Add Blog
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-[#DCA54A] font-semibold w-full${
                      isActive ? "text-black underline" : "text-black"
                    }`
                  }
                  to="/wishlist"
                >
                  Wishlist
                </NavLink>
                <button
                  type="submit"
                  onClick={logOut}
                  className="font-semibold w-full border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
                >
                  Logout
                </button>
              </div>
            )}

            {user ? (
              ""
            ) : (
              <>
                <div className="flex flex-col gap-3 mx-10">
                  <Link
                    to="/login"
                    className="px-5 w-full border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-5 w-full border py-2 bg-[#DCA54A] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transition-all"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
