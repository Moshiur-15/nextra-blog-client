import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/Hook";
import blogReg from "../../assets/bloglogin.jpg";
import { MdOutlineNavigateBefore } from "react-icons/md";

export default function Register() {
  const { createUser, setUser, profile, googleProvider } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Google Authentication
  const handleGoogleProvider = () => {
    googleProvider()
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "Registered successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };

  // Form Submit
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password Validation
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

    // Create User
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        profile({ displayName: name, photoURL: photo });
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "Registered successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <section
      style={{
        backgroundImage: `url(${blogReg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <button
        data-tip="Back To Home Page"
        onClick={handleHome}
        className="tooltip z-20 tooltip-right absolute top-4 left-4 bg-cyan-600 border-none text-4xl rounded-full text-white p-2 shadow-md"
      >
        <MdOutlineNavigateBefore />
      </button>
      <section className="px-5 md:px-0">
        <div className="pt-20 lg:pt-0 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md bg-gray-100/90 p-8 shadow-lg rounded-lg relative z-10">
            <h2 className="uppercase text-3xl font-bold text-center text-cyan-600 mb-6">
              Create account
            </h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your photo URL"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-9 right-3 text-gray-500"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-lg transition"
              >
                <CgLogIn className="inline-block mr-2 text-lg" />
                Register
              </button>
            </form>

            <div className="mt-4">
              <button
                onClick={handleGoogleProvider}
                className="w-full flex items-center justify-center gap-2 bg-white border border-cyan-600 text-cyan-600 font-semibold py-2 rounded-lg hover:bg-cyan-50 transition"
              >
                <FaGoogle className="text-lg" />
                Register with Google
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/login" className="text-sm text-gray-600">
                Already have an account?{" "}
                <span className="text-cyan-600 hover:underline">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
