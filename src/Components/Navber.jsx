import React from "react";
import {  Button, Navbar } from "flowbite-react";
import useAuth from "../hooks/Hook";
import { Link, NavLink } from "react-router-dom";
import UseDropdown from "./UseDropdown";
import logo from '../assets/blogsicon.png'

export default function Navber() {
  const { user, logOut } = useAuth();

  return (
    <div className="shadow-md bg-gray-900 py-2 sticky top-0 z-50">
      <section className="container mx-auto">
        <div className="flex justify-between items-center px-4 md:px-0">
          <Navbar
            fluid
            rounded
            className="bg-gray-900 text-white w-full px-0 sm:px-0"
          >
            {/* Brand Section */}
            <Navbar.Brand>
              <div className="">
                <img
                  className="rounded-xl w-32 object-cover"
                  src={logo}
                  alt="NextEra Blog Logo"
                />
              </div>
            </Navbar.Brand>

            {/* Right Side Section */}
            <div className="flex md:order-2 items-center gap-4">
              {user ? (
                // <Dropdown
                //   arrowIcon={false}
                //   inline
                //   label={
                //     <Tooltip content="Click nowe" style="dark">
                //       <Avatar
                //         alt="User settings"
                //         img={user?.photoURL}
                //         rounded
                //       />
                //     </Tooltip>
                //   }
                // >
                //   <Dropdown.Header>
                //     <span className="block text-sm">{user?.displayName}</span>
                //     <span className="block truncate text-sm font-medium">
                //       {user?.email}
                //     </span>
                //   </Dropdown.Header>
                //   <Dropdown.Item>
                //     <NavLink
                //       className={({ isActive }) =>
                //         `hover:text-cyan-500 font-semibold w-full text-left ${
                //           isActive ? "text-cyan-400 underline" : "text-black"
                //         }`
                //       }
                //       to="/addBlog"
                //     >
                //       Add Blog
                //     </NavLink>
                //   </Dropdown.Item>
                //   <Dropdown.Item>
                //     <NavLink
                //       className={({ isActive }) =>
                //         `hover:text-cyan-400 font-semibold w-full text-left ${
                //           isActive ? "text-cyan-500 underline" : "text-black"
                //         }`
                //       }
                //       to="/wishlist"
                //     >
                //       Wishlist
                //     </NavLink>
                //   </Dropdown.Item>
                //   <Dropdown.Divider />
                //   <Dropdown.Item onClick={logOut} className="font-semibold">
                //     Logout
                //   </Dropdown.Item>
                // </Dropdown>
                <UseDropdown user={user} logOut={logOut} />
              ) : (
                <div className="flex gap-2">
                  <Button
                    color=""
                    className="bg-cyan-500 hover:bg-cyan-600 font-bold"
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button
                    color=""
                    className="bg-cyan-500 hover:bg-cyan-600 font-bold"
                  >
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
              )}

              <Navbar.Toggle />
            </div>

            {/* Navbar Links */}
            <Navbar.Collapse className="font-lora text-center gap-6">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-cyan-500 font-bold ${
                    isActive ? "text-cyan-400 underline" : "text-white"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `hover:text-cyan-500 font-bold ${
                    isActive ? "text-cyan-400 underline" : "text-white"
                  }`
                }
                to="/allBlogs"
              >
                All Blogs
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `hover:text-cyan-500 font-bold ${
                    isActive ? "text-cyan-400 underline" : "text-white"
                  }`
                }
                to="/featuredBlogs"
              >
                Featured Blogs
              </NavLink>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </section>
    </div>
  );
}
