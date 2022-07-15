import React, { useState } from "react";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

function ProgressSteps() {
  const [active, setActive] = useState(0);
  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const handleNext = () => {
    if (active < 3) {
      setActive(active + 1);
    }
  };

  return (
    <div
      className={
        "flex items-center justify-center h-screen overflow-hidden m-auto overflow-hidden pt-[80px]"
      }
    >
      <div className={"text-center"}>
        <div
          className={
            "flex justify-between relative mb-[30px] max-h-full w-[350px] items-center before:bg-gray-300 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-1 before:w-full before:-z-10"
          }
        >
          <div
            className={
              "bg-blue-700 absolute top-1/2 left-0 -translate-y-1/2 h-1 -z-10 transition-all duration-300 ease-in-out"
            }
            style={{ width: `${(active * 100) / 3}%` }}
          ></div>
          <div
            className={classNames(
              "bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center border-solid border-2 transition-all duration-300 ease-in",
              active >= 0 ? "border-blue-700 text-blue-700" : "border-gray-300"
            )}
          >
            1
          </div>
          <div
            className={classNames(
              "bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center border-solid border-2 transition-all duration-300 ease-in",
              active >= 1 ? "border-blue-700 text-blue-700" : "border-gray-300"
            )}
          >
            2
          </div>
          <div
            className={classNames(
              "bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center border-solid border-2 transition-all duration-300 ease-in",
              active >= 2 ? "border-blue-700 text-blue-700" : "border-gray-300"
            )}
          >
            3
          </div>
          <div
            className={classNames(
              "bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center border-solid border-2 transition-all duration-300 ease-in",
              active >= 3 ? "border-blue-700 text-blue-700" : "border-gray-300"
            )}
          >
            4
          </div>
        </div>
        <button
          type={"button"}
          className={"py-2 px-5 bg-blue-600 rounded text-white mx-4"}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          type={"button"}
          className={"py-2 px-5 bg-blue-600 rounded text-white mx-4"}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProgressSteps;
