import React from "react";
import { useTitle } from "../hooks/useTitle";
import { classNames } from "../utils/ClassNames";

const colors = ["amber-300", "red-500", "orange-600", "green-600"];

const Square = () => {
  return (
    <div
      className={classNames(
        "bg-gray-600 shadow h-[16px] w-[16px] m-[2px] transition-all duration-[2s] ease-in hover:duration-[0s]",
        `hover:bg-${colors[Math.floor(Math.random() * colors.length)]}`
      )}
    ></div>
  );
};

function Hoverboard() {
  useTitle("Hoverboard");
  let arr = new Array(500);
  for (let i = 0; i < 500; i++) {
    arr[i] = i;
  }
  return (
    <div
      className={
        "bg-gray-800 flex items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <div
        className={"flex items-center justify-center flex-wrap max-w-[400px]"}
      >
        {arr.map((index) => (
          <Square key={index} />
        ))}
      </div>
    </div>
  );
}

export default Hoverboard;
