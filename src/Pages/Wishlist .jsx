import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/Hook";

export default function Wishlist() {

  // const [blogs, setBlogs] = useState([]);
  // const {user}= useAuth();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       `${import.meta.env.VITE_LOCALHOST}/wishlist`
  //     );
  //     setBlogs(data);
  //   };
  //   fetchData();
  // }, []);
  // console.log(blogs)
  return(
    <div>
      <h1>Wishlist :</h1>
    </div>
  );
}
