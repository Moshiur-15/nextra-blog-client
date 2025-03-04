import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/Hook";
import blogReg from "../../assets/blog.jpg";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FileInput } from "flowbite-react";
import { imgUp } from "../../api/Utills";

export default function Register() {
  const { createUser, setUser, profile, googleProvider } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Google Authentication
  const handleGoogleProvider = () => {
    setLoading2(true);
    googleProvider()
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        toast.success("Registered successfully!");
        setLoading2(false);
      })
      .catch((error) => {
        setLoading2(false);
        return toast.error(`${error.message}`);
      });
  };

  // Form Submit
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    // const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const img = e.target.image.files[0];

    const uploadedImageUrl = await imgUp(img);

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
        profile({ displayName: name, photoURL: uploadedImageUrl });
        navigate(location.state ? location.state : "/");
        toast.success("Registered successfully!");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
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
        className="tooltip z-20 tooltip-right absolute top-4 left-4 bg-[#FAF5E5] border-none text-4xl rounded-full p-2 shadow-md"
      >
        <MdOutlineNavigateBefore />
      </button>
      <section className="px-5 md:px-0">
        <div className="pt-20 lg:pt-0 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md bg-gray-100/90 p-8 shadow-lg rounded-lg relative z-10">
            <h2 className="uppercase text-3xl font-bold text-center mb-6">
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
                  className="w-full px-4 py-2 mt-1 bg-white border-none focus:ring-0 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>

                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="bg-white w-full"
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
                  className="w-full px-4 py-2 mt-1 bg-white border-none focus:ring-0 focus:outline-none"
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
                  className="w-full px-4 py-2 mt-1 bg-white border-none focus:ring-0 focus:outline-none"
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
                className="w-full flex items-center justify-center gap-2 px-5 py-2 bg-[#DCA54A] hover:bg-[#FAF5E5] hover:text-black text-white duration-700 transitions"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                ) : (
                  <>
                    <CgLogIn className="inline-block mr-2 text-lg" />
                    Register
                  </>
                )}
              </button>
            </form>

            <div className="mt-4">
              <button
                onClick={handleGoogleProvider}
                className="w-full flex items-center justify-center gap-2 px-5 border py-2 bg-[#FAF5E5] hover:bg-[#DCA54A] hover:text-white duration-700 transition"
              >
                {loading2 ? (
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                ) : (
                  <>
                    <FaGoogle className="text-lg" />
                    Register with Google
                  </>
                )}
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/login" className="text-sm text-gray-600">
                Already have an account?{" "}
                <span className="text-[#DCA54A] hover:underline">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
