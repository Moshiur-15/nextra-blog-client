import React from "react";
import { Avatar, Button, Navbar } from "flowbite-react";
import useAuth from "../hooks/Hook";
import { Link, NavLink } from "react-router-dom";
export default function Navber() {
  const { user, logOut } = useAuth();
  return (
    <div className="shadow-md bg-[#111111]">
      <div className="md:mx-5 lg:mx-16">
        <Navbar fluid rounded className="bg-[#111111] text-white">
          <Navbar.Brand href="https://flowbite-react.com">
            <h2 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </h2>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Avatar
              referrerPolicy="no-referrer"
              alt="not found"
              img={user?.photoURL}
              rounded
            />
            <div className="ml-2">
              {user ? (
                <Button
                  color=""
                  className="hover:bg-[#eb6331] bg-[#ff7341] font-bold"
                  onClick={logOut}
                >
                  Logout
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    color=""
                    className="hover:bg-[#eb6331] bg-[#ff7341] font-bold"
                  >
                    Login
                  </Button>
                  <Button
                    color=""
                    className="hover:bg-[#eb6331] bg-[#ff7341] font-bold"
                  >
                    Register
                  </Button>
                </div>
              )}
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="font-lora">
            <Navbar.Link>
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-[#F08A65] font-bold ${
                    isActive ? "text-[#F08A65] underline" : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </Navbar.Link>

            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-[#F08A65] font-bold ${
                    isActive ? "text-[#F08A65] underline" : ""
                  }`
                }
                to="/addBlog"
              >
                Add Blog
              </NavLink>
            </Navbar.Link>
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-[#F08A65] font-bold ${
                    isActive ? "text-[#F08A65] underline" : ""
                  }`
                }
                to="/allBlogs"
              >
                All blogs
              </NavLink>
            </Navbar.Link>
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-[#F08A65] font-bold ${
                    isActive ? "text-[#F08A65] underline" : ""
                  }`
                }
                to="/featuredBlogs"
              >
                Featured Blogs
              </NavLink>
            </Navbar.Link>
            <Navbar.Link href="#">
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-[#F08A65] font-bold ${
                    isActive ? "text-[#F08A65] underline" : ""
                  }`
                }
                to="/wishlist"
              >
                Wishlist
              </NavLink>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
