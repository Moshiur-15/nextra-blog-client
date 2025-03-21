import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import AllBlogs from "../Pages/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist ";
import AddBlog from "../Pages/AddBlog";
import BlogDetail from "../Components/BlogDetail";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import UpdateBlog from "../Components/updateBlog";
import TrendingPosts from "../Components/trendingPosts";
import About from "../Pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/navber",
        element: <Navber />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs />,
      },
      {
        path: "/blogsDetail/:id",
        element: <BlogDetail />,
      },
      {
        path: "/popularBlog",
        element: <TrendingPosts />,
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoutes>
            <Wishlist />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoutes>
            <AddBlog />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateBlog/:id",
        element: (
          <PrivateRoutes>
            <UpdateBlog />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
