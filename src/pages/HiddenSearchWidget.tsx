import React, { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

function HiddenSearchWidget() {
  const [active, setActive] = useState(true);

  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        "bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center h-screen pt-[66px] overflow-hidden m-0"
      }
    >
      <div className={"relative h-[50px]"}>
        <input
          className={classNames(
            "rounded-l bg-white p-[15px] h-[50px] transition-[width] duration-300 ease-in-out focus:outline-none",
            active ? "w-[200px]" : "rounded-r w-[50px]"
          )}
          type={"text"}
          placeholder={"Search..."}
        />
        <button
          className={classNames(
            "rounded flex bg-white cursor-pointer text-2xl absolute top-0 left-0 h-[50px] w-[50px] transition-transform duration-300 ease-in-out",
            active ? "translate-x-[198px]" : ""
          )}
          type={"button"}
          title={"Click me!"}
          onClick={handleSetActive}
        >
          <i className={"m-auto text-3xl"}>
            <BiSearchAlt />
          </i>
        </button>
      </div>
    </div>
  );
}

export default HiddenSearchWidget;
