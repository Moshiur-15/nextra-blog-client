import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/Hook";

export default function Login() {
  const { loginUser, setUser, googleProvider } = useAuth();
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
          title: "The Login",
          text: "Login successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };
  // handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "The Login",
          text: "Login successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };
  return (
    <div className="py-5 flex items-center justify-center min-h-[calc(100vh-250px)]">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-800 text-center ">
          Login your account
        </h2>

        <form className="space-y-3" onSubmit={handleLogin}>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter your Password"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[50px]"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* btn */}
          <div className="flex items-center my-3 gap-2">
            <div className="form-control flex-1">
              <button className="btn">
                <span>
                  <CgLogIn />
                </span>
                <span>Register</span>
              </button>
            </div>
            <div className="form-control flex-1">
              <button
                type="button"
                onClick={handleGoogleProvider}
                className="flex items-center gap-2 rounded-xl border btn"
              >
                <span>
                  <FaGoogle />
                </span>
                <span>Google</span>
              </button>
            </div>
          </div>
        </form>

        <Link to="/register">
          Don’t Have An Account?
          <span className="text-red-500 underline">Register</span>
        </Link>
      </div>
    </div>
  );
}
