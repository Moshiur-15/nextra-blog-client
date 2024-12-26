import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold text-red-500 md:text-5xl mt-10">404 Error</h1>
      <h1 className="text-cyan-600 font-semibold md:text-2xl text-xl mb-2">
        Page {err.statusText}
      </h1>
      <Link to="/">
        <button className="text-cyan-600 bg-cyan-50 btn border-2 border-cyan-600">
          Go back
        </button>
      </Link>
    </div>
  );
}
