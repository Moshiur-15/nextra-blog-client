import React from "react";

const Title = ({fast_text, italic}) => {
  return (
    <div className="text-center mb-2.5">
      <h2 className="text-3xl font-semibold">
        {fast_text} <span className=" text-[#be9b28] ml-1">{italic}</span>
      </h2>
    </div>
  );
};

export default Title;
