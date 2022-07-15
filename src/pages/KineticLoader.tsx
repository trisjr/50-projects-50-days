import React from "react";

function KineticLoader() {
  return (
    <div
      className={
        "bg-gray-700 flex items-center justify-center h-screen pt[66px] overflow-hidden"
      }
    >
      <div
        className={
          "relative h-[80px] w-[80px] before:content-[' '] before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-[50px] before:border-solid before:border-transparent before:border-b-white before:animate-rotateB before:rotate-90  after:content-[' '] after:absolute after:top-0 after:left-0 after:w-0 after:h-0 after:border-[50px] after:border-solid after:border-transparent after:border-b-white after:animate-rotateA"
        }
      />
    </div>
  );
}

export default KineticLoader;
