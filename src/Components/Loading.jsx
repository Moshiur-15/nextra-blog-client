import React from "react";
import { Watch } from "react-loader-spinner";
export default function Loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-[60vh]">
        <Watch
          visible={true}
          height="120"
          width="120"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}
