import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/Hook";
import UseDropdown from "./UseDropdown";
import { IoMenu } from "react-icons/io5";
import { Avatar } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/blogsicon.png";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow py-2 sticky top-0 z-50 bg-[#FAF5E5]">
      <section className="container mx-auto">
        <div className="flex justify-between items-center px-4 xl:px-0 py-2">
          <div>
            <img className="w-32" src={logo} alt="" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-2 text-lg font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoMdClose size={38} className="cursor-pointer text-black p-1" />
            ) : (
              <IoMenu
                size={38}
                className="cursor-pointer text-[#DCA54A] p-1 border border-[#e8a73d]"
              />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                  isActive
                    ? "text-[#DCA54A] border-b border-yellow-300"
                    : "text-gray-600"
                }`
              }
              to="/"
            >
              🏠 Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                  isActive
                    ? "text-[#DCA54A] border-b border-yellow-300"
                    : "text-gray-600"
                }`
              }
              to="/allBlogs"
            >
              📚 All Blogs
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                  isActive
                    ? "text-[#DCA54A] border-b border-yellow-300"
                    : "text-gray-600"
                }`
              }
              to="/featuredBlogs"
            >
              ⭐ Featured Blogs
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1  flex flex-row items-center gap-1 ${
                  isActive
                    ? "text-[#DCA54A] border-b border-yellow-300"
                    : "text-gray-600"
                }`
              }
              to="/about"
            >
              <img
                className="h-5 w-5"
                src="https://i.ibb.co.com/RG80Xq1p/Screenshot-2025-03-09-114756-removebg-preview.png"
                alt=""
              />
              About
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
                  className="px-5 border py-2 bg-[#FAF5E5] border-[#f1b451] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all hover:border-transparent"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 border py-2 bg-[#DCA54A] border-[#f1b451] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transition-all border-transparent"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-2 py-4 space-y-3 text-center ">
            <div className="flex flex-col max-w-[110px] mx-auto">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                    isActive
                      ? "text-[#DCA54A] border-b border-yellow-300"
                      : "text-gray-600"
                  }`
                }
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                🏠 Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                    isActive
                      ? "text-[#DCA54A] border-b border-yellow-300"
                      : "text-gray-600"
                  }`
                }
                to="/allBlogs"
                onClick={() => setMenuOpen(false)}
              >
                📚 All Blogs
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                    isActive
                      ? "text-[#DCA54A] border-b border-yellow-300"
                      : "text-gray-600"
                  }`
                }
                to="/featuredBlogs"
                onClick={() => setMenuOpen(false)}
              >
                ⭐Featured Blogs
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#DCA54A] duration-700 mx-auto transition hover:border-b hover:border-yellow-300 pb-1  flex flex-row items-center gap-1 ${
                    isActive
                      ? "text-[#DCA54A] border-b border-yellow-300"
                      : "text-gray-600"
                  }`
                }
                to="/about"
              >
                <img
                  className="h-5 w-5"
                  src="https://i.ibb.co.com/RG80Xq1p/Screenshot-2025-03-09-114756-removebg-preview.png"
                  alt=""
                />
                About
              </NavLink>

              {user && (
                <div className="flex flex-col gap-3 text-center">
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                        isActive
                          ? "text-[#DCA54A] border-b border-yellow-300"
                          : "text-gray-600"
                      }`
                    }
                    to="/addBlog"
                  >
                    📝 Add Blog
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-[#DCA54A] duration-700 transition hover:border-b hover:border-yellow-300 pb-1 ${
                        isActive
                          ? "text-[#DCA54A] border-b border-yellow-300"
                          : "text-gray-600"
                      }`
                    }
                    to="/wishlist"
                  >
                    🎁 Wishlist
                  </NavLink>
                  <button
                    type="submit"
                    onClick={logOut}
                    className="font-semibold w-full border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition-all"
                  >
                    🔐 Logout
                  </button>
                </div>
              )}
            </div>

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
