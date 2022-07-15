import React, { useState } from "react";
import { classNames } from "../utils/ClassNames";
import { Link } from "react-router-dom";

function AnimatedNavigation() {
  const [active, setActive] = useState(true);
  const handleSetActive = () => {
    setActive(!active);
  };
  return (
    <div
      className={"bg-white flex items-center justify-center h-screen"}
      style={{
        backgroundImage:
          "linear-gradient( to bottom, #eafbff 0%, #eafbff 50%, #5290f9 50%, #5290f9 100% )",
      }}
    >
      <nav
        className={classNames(
          "bg-white p-[20px] flex items-center justify-center rounded shadow transition-all duration-500 ease-linear shadow",
          active ? "w-[350px]" : "w-[80px]"
        )}
      >
        <ul
          className={classNames(
            "flex p-0 m-0 transition-all duration-500 ease-linear",
            active ? "w-full" : "w-0"
          )}
        >
          <li
            className={classNames(
              "transition-all duration-500 ease-linear",
              active ? "opacity-100" : "opacity-0"
            )}
            style={{
              transform: `rotateY(${active ? 360 : 0}deg)`,
            }}
          >
            <Link className={"relative text-black mx-[10px]"} to={"#"}>
              Home
            </Link>
          </li>
          <li
            className={classNames(
              "transition-all duration-500 ease-linear",
              active ? "opacity-100" : "opacity-0"
            )}
            style={{
              transform: `rotateY(${active ? 360 : 0}deg)`,
            }}
          >
            <Link className={"relative text-black mx-[10px]"} to={"#"}>
              Works
            </Link>
          </li>
          <li
            className={classNames(
              "transition-all duration-500 ease-linear",
              active ? "opacity-100" : "opacity-0"
            )}
            style={{
              transform: `rotateY(${active ? 360 : 0}deg)`,
            }}
          >
            <Link className={"relative text-black mx-[10px]"} to={"#"}>
              About
            </Link>
          </li>
          <li
            className={classNames(
              "transition-all duration-500 ease-linear",
              active ? "opacity-100" : "opacity-0"
            )}
            style={{
              transform: `rotateY(${active ? 360 : 0}deg)`,
            }}
          >
            <Link className={"relative text-black mx-[10px]"} to={"#"}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          type={"button"}
          onClick={handleSetActive}
          className={"bg-white p-0 relative h-[30px] w-[30px]"}
        >
          <div
            className={classNames(
              "bg-blue-600 h-[2px] w-[20px] absolute top-[10px] left-[5px] transition-transform duration-500 ease-linear",
              active ? "translate-y-[4px] -rotate-[765deg]" : ""
            )}
          />
          <div
            className={classNames(
              "bg-blue-600 h-[2px] w-[20px] absolute top-auto bottom-[10px] left-[5px] transition-transform duration-500 ease-linear",
              active ? "-translate-y-[4px] rotate-[765deg]" : ""
            )}
          />
        </button>
      </nav>
    </div>
  );
}

export default AnimatedNavigation;
