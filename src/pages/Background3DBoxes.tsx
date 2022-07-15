import React, { useState } from "react";
import { classNames } from "../utils/ClassNames";
import { useTitle } from "../hooks/useTitle";

function Background3DBoxes() {
  useTitle("Background 3D Boxes");
  const [status, setStatus] = useState(false);
  const handleSetStatus = () => {
    setStatus(!status);
  };
  const boxes = new Array(16);
  for (let i = 0; i < 16; i++) boxes[i] = i;
  return (
    <div
      className={
        "bg-white flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <button
        type={"button"}
        className={
          "bg-amber-400 text-white rounded font-semibold py-3 px-5 fixed top-[88px] z-50"
        }
        onClick={handleSetStatus}
      >
        Magic
      </button>
      <div
        className={classNames(
          "flex flex-wrap justify-around relative transition-all duration-300 ease-in",
          status ? "w-[500px] h-[500px]" : "w-[600px] h-[600px]"
        )}
      >
        {boxes.map((box) => (
          <div
            key={box}
            className={
              "bg-no-repeat w-[125px] h-[125px] relative transition-all duration-300 ease-in after:bg-amber-300 after:absolute after:top-[8px] after:-right-[15px] after:h-full after:w-[15px] after:skew-y-[45deg] before:bg-amber-400 before:absolute before:-bottom-[15px] before:left-[8px] before:h-[15px] before:w-full before:skew-x-[45deg]"
            }
            style={{
              transform: status ? `rotateZ(360deg)` : "rotateZ(0)",
              backgroundPosition: `${(box % 4) * -125}px ${
                Math.floor(box / 4) * -125
              }px`,
              backgroundSize: "500px 500px",
              backgroundImage:
                "url(https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Background3DBoxes;
