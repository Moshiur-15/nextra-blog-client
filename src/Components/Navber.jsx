import React from "react";
import { Avatar, Button, Navbar } from "flowbite-react";
import useAuth from "../hooks/Hook";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/blogsicon.png'
export default function Navber() {
  const { user, logOut } = useAuth();
  return (
    <div className="shadow-md bg-gray-900 py-2">
      <div className="md:mx-5 lg:mx-16">
        <Navbar fluid rounded className="bg-gray-900 text-white">
          <Navbar.Brand >
            <div className="flex gap-2 flex-row">
              <img className="h-8 rounded-xl w-8" src={Logo} alt="not found" />
            <h2 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Blogs
            </h2>
            </div>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Avatar
              alt="not found"
              img={user?.photoURL}
              className="mr-2"
              rounded
            />
            <div className="space-x-2">
              {user ? (
                <Button
                  color=""
                  className="bg-cyan-500 hover:bg-cyan-600 font-bold"
                  onClick={logOut}
                >
                  Logout
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    color=""
                    className="bg-cyan-500 hover:bg-cyan-600 font-bold"
                  >
                    <Link to='/login'>Login</Link>
                  </Button>
                  <Button
                    color=""
                    className="bg-cyan-500 hover:bg-cyan-600 font-bold"
                  >
                    <Link to='/register'>Register</Link>
                  </Button>
                </div>
              )}
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="font-lora">
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
              to="/addBlog"
            >
              Add Blog
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                ` hover:text-cyan-500 font-bold ${
                  isActive ? "text-cyan-400 underline" : "text-white"
                }`
              }
              to="/allBlogs"
            >
              All blogs
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                ` hover:text-cyan-500 font-bold ${
                  isActive ? "text-cyan-400 underline" : "text-white"
                }`
              }
              to="/featuredBlogs"
            >
              Featured Blogs
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-white hover:text-cyan-400 font-bold ${
                  isActive ? "text-cyan-500 underline" : ""
                }`
              }
              to="/wishlist"
            >
              Wishlist
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
