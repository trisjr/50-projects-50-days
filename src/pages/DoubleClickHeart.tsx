import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function DoubleClickHeart() {
  const [heart, setHeart] = useState(0);
  // const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleDoubleClick = () => {
    setHeart(heart + 1);
  };
  return (
    <div className={"pt-[66px] text-center"}>
      <h1 className={"mb-0 mt-3 text-2xl font-semibold text-center"}>
        Double Click the image to{" "}
        <i className={"inline-block text-[18px] text-red-600"}>
          <FaHeart />
        </i>{" "}
        this
      </h1>
      <div>{`You liked it ${heart} times`}</div>
      <div
        className={
          "h-[440px] w-[300px] bg-no-repeat bg-center bg-cover m-auto cursor-pointer max-w-full relative shadow-md"
        }
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
        }}
        onDoubleClick={handleDoubleClick}
      />
    </div>
  );
}

export default DoubleClickHeart;
