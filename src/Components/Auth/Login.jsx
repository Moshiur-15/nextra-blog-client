import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import Swal from "sweetalert2";
import useAuth from "../../hooks/Hook";
import blogLogin from "../../assets/blog.jpg";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {toast} from 'react-hot-toast'

export default function Login() {
  const { loginUser, setUser, googleProvider } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // handleGoogleProvider
  const handleGoogleProvider = () => {
    setLoading2(true);
    googleProvider()
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        toast.success("Login successfully!");
        setLoading2(false);
      })
      .catch((error) => {
        setLoading2(false);
        return toast.error(`${error.message}`);
      });
  };

  // handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location.state ? location.state : "/");
        toast.success("Login successfully!");
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
        backgroundImage: `url(${blogLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen absolute inset-0 bg-black opacity-35"></div>
      <button
        data-tip="Back To Home Page"
        onClick={handleHome}
        className="tooltip tooltip-right absolute top-4 left-4 bg-[#FAF5E5] border-none text-4xl rounded-full text-[#DEE4E5] p-2 shadow-md"
      >
        <MdOutlineNavigateBefore />
      </button>

      <section className="px-5 md:px-0">
        <div className="pt-20 lg:pt-0 min-h-screen flex items-center justify-center bg-cover bg-center">
          <div className="w-full max-w-md bg-gray-100/90 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-extrabold text-center text-[#DCA54A] mb-6">
              Welcome Back!
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              Login to continue exploring your dashboard
            </p>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-9 right-4 text-gray-500"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#FAF5E5] hover:bg-cyan-700 text-[#DEE4E5] font-semibold py-3 rounded-lg transition"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                ) : (
                  <>
                    <CgLogIn className="text-lg" />
                    Login
                  </>
                )}
              </button>
            </form>
            <div className="mt-6">
              <button
                onClick={handleGoogleProvider}
                className="w-full flex items-center justify-center gap-2 bg-white border border-cyan-600 text-[#DCA54A] font-semibold py-3 rounded-lg hover:bg-cyan-50 transition"
              >
                {loading2 ? (
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                ) : (
                  <>
                    <FaGoogle className="text-lg" />
                    Login with Google
                  </>
                )}
              </button>
            </div>
            <div className="text-center mt-6">
              <Link to="/register" className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <span className="text-[#DCA54A] hover:underline">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
