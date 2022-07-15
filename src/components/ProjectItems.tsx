import React, { useState } from "react";

import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { classNames } from "../utils/ClassNames";

function ProjectItems(props: any) {
  const navigate = useNavigate();
  const [option, setOption] = useState({
    hover: false,
  });
  const { hover } = option;

  const onMouseOverHandle = () => {
    setOption({
      ...option,
      hover: true,
    });
  };

  const onMouseOutHandle = () => {
    setOption({
      ...option,
      hover: false,
    });
  };

  const handleClick = () => {
    if (props.status) {
      navigate(props.href);
    }
  };

  return (
    <div
      className={classNames(
        "relative rounded-[12px] cursor-pointer w-full ease-linear duration-300 m-2",
        hover ? "bg-purple-600" : ""
      )}
      onMouseOver={onMouseOverHandle}
      onMouseOut={onMouseOutHandle}
      onClick={handleClick}
    >
      <div
        className={classNames(
          "absolute w-full text-center block z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white ease-linear duration-400",
          hover ? "opacity-100" : "opacity-0"
        )}
      >
        <div className={"font-bold text-[1.2rem] text-red"}>{props.name}</div>
        <button
          type={"button"}
          className={
            "bg-blue-900 text-white px-5 py-2 mt-3 flex mx-auto items-center rounded"
          }
        >
          <div className={"font-bold"}>{props.status ? "Open" : "Lock"}</div>
          {!props.status && (
            <i className={"text-[18px] ml-1"}>
              <MdOutlineLock />
            </i>
          )}
        </button>
      </div>
      <img
        className={classNames(
          "ease-linear duration-300 rounded-[12px]",
          hover ? "opacity-0" : "opacity-100"
        )}
        src={props.image}
        alt={props.name}
      />
    </div>
  );
}

export default ProjectItems;
