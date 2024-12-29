import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Img from "../assets/error.avif";

export default function ErrorPage() {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center mt-10">
      <img src={Img} alt="" />
      <h1 className=" text-cyan-600 font-semibold md:text-5xl text-xl mb-5">
        Oops Page {err.statusText}
      </h1>
      <Link to="/">
        <button className="text-cyan-600 bg-cyan-50 btn border-2 border-cyan-600">
          Go back
        </button>
      </Link>
    </div>
  );
}
