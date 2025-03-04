import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";

const UserDropdown = ({ user, logOut }) => {
  return (
    <div className="relative flex items-center gap-2 hover:text-[#DCA54A]">
      <Dropdown
        arrowIcon={false}
        inline
        label='My Space'
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
