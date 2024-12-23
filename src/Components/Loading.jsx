import React from "react";
import { ThreeDots } from "react-loader-spinner";
export default function Loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh]">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#06b6d4"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}
