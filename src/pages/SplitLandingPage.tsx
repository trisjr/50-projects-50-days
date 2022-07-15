import React, { useState } from "react";
import { Link } from "react-router-dom";

function SplitLandingPage() {
  const [hoverIn, setHoverIn] = useState("center");
  return (
    <div className={"h-screen pt-[66px] overflow-hidden m-0"}>
      <div
        className={"relative w-full h-full bg-gray-700"}
        onMouseOut={() => {
          setHoverIn("center");
        }}
      >
        <div
          className={
            "absolute w-1/2 h-full overflow-hidden left-0 bg-no-repeat bg-cover before:content-[' '] before:absolute before:w-full before:h-full before:bg-sky-600 before:opacity-50 bg-[url('https://50projects50days.com/projects/split-landing-page/ps.jpg')] transition-all duration-1000 ease-in-out"
          }
          style={{
            width: `${
              hoverIn === "center" ? 50 : hoverIn === "left" ? 70 : 30
            }%`,
          }}
          onMouseOver={() => {
            setHoverIn("left");
          }}
        >
          <div
            className={
              "font-bold text-4xl text-white absolute left-1/2 top-1/3 -translate-x-1/2 whitespace-nowrap"
            }
          >
            Playstation 5
          </div>
          <Link
            className={
              "absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 text-white border-white border-2 border-solid p-6 uppercase w-56 font-bold "
            }
            to={"#"}
          >
            Buy now
          </Link>
        </div>
        <div
          className={
            "absolute w-1/2 h-full overflow-hidden right-0 bg-no-repeat bg-cover bg-[url('https://50projects50days.com/projects/split-landing-page/xbox.jpg')] before:content-[' '] before:absolute before:w-full before:h-full before:bg-gray-900 before:opacity-50 transition-all duration-1000 ease-in-out"
          }
          style={{
            width: `${
              hoverIn === "center" ? 50 : hoverIn === "right" ? 70 : 30
            }%`,
          }}
          onMouseOver={() => {
            setHoverIn("right");
          }}
        >
          <div
            className={
              "font-bold text-4xl text-white absolute left-1/2 top-1/3 -translate-x-1/2 whitespace-nowrap"
            }
          >
            XBox Series X
          </div>
          <Link
            className={
              "absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 text-white border-white border-2 border-solid p-6 uppercase w-56 font-bold "
            }
            to={"#"}
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplitLandingPage;
