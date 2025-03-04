import { Dropdown, Avatar, Tooltip } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const UserDropdown = ({ user, logOut }) => {
  return (
    <div className="relative flex items-center gap-2">
      <Avatar alt="User settings" img={user?.photoURL} rounded />
      <Dropdown
        arrowIcon={false}
        inline
        label={<IoMenu size={32} className="cursor-pointer border rounded bg-white text-black" />}
      >
        <Dropdown.Header>
          <span className="block text-sm">{user?.displayName}</span>
          <span className="block truncate text-sm font-medium">
            {user?.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          <NavLink
            className={({ isActive }) =>
              `hover:text-[#DCA54A] font-semibold w-full text-left ${
                isActive ? "text-black underline" : "text-black"
              }`
            }
            to="/addBlog"
          >
            Add Blog
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={({ isActive }) =>
              `hover:text-[#DCA54A] font-semibold w-full text-left ${
                isActive ? "text-black underline" : "text-black"
              }`
            }
            to="/wishlist"
          >
            Wishlist
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={logOut} className="font-semibold">
          Logout
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default UserDropdown;
