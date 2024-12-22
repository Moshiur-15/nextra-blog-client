import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import useAuth from "../../hooks/Hook";

export default function Register() {
  const { createUser, setUser, profile, googleProvider } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // handleGoogleProvider
  const handleGoogleProvider = () => {
    googleProvider()
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "The Register",
          text: "Register successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter."
      );
    } else if (!/[0-9]/.test(password)) {
      return toast.error("Password must contain at least one digit.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return toast.error(
        "Password must contain at least one special character."
      );
    } else if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        profile({ displayName: name, photoURL: photo });
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "The Register",
          text: "Register successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };
  return (
    <div className="flex items-center justify-center my-10 min-h-[calc(100vh-250px)]">
      <div className="w-full max-w-md p-8 shadow-md hover:shadow-lg rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-800 text-center ">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister}>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">PhotoURl</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 bottom-[10px]"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-[15px] border hover:border-cyan-600 bg-cyan-600 hover:text-cyan-600 font-bold hover:bg-white text-white">
              <span>
                <CgLogIn />
              </span>
              <span>Register</span>
            </button>
          </div>
        </form>
        <div className="form-control mt-2">
          <button
            onClick={handleGoogleProvider}
            className="btn border text-[15px] border-cyan-600 text-cyan-600 font-semibold"
          >
            <span>
              <FaGoogle />
            </span>
            <span>Google</span>
          </button>
        </div>
        <Link to="/login">
          Alrady Have An Account?{" "}
          <span className="text-red-500 underline">Login</span>
        </Link>
      </div>
    </div>
  );
}
