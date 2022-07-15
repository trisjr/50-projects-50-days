import React, { useState } from "react";

function GoodCheapFast() {
  const [data, setData] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const handleClick = (type: string) => {
    switch (type) {
      case "good": {
        setData({
          ...data,
          good: !good,
          fast: !good && cheap && fast ? false : fast,
        });
        break;
      }
      case "cheap": {
        setData({
          ...data,
          cheap: !cheap,
          good: good && !cheap && fast ? false : good,
        });
        break;
      }
      case "fast": {
        setData({
          ...data,
          fast: !fast,
          cheap: good && cheap && !fast ? false : cheap,
        });
        break;
      }
      default:
        return;
    }
  };
  const { good, cheap, fast } = data;
  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <h1 className={"text-3xl font-bold"}>
        How do you want your project to be?
      </h1>
      <div className={"flex items-center my-[10px] w-[200px]"}>
        <input
          type={"checkbox"}
          checked={good}
          id={"good"}
          className={"hidden"}
        />
        <label
          htmlFor={"good"}
          className={
            "relative rounded-[50px] cursor-pointer inline-block mx-[15px] w-[80px] h-[40px] " +
            (good ? "bg-purple-600" : "bg-gray-400")
          }
          onClick={() => {
            handleClick("good");
          }}
        >
          <div
            className={
              "bg-white h-[34px] w-[34px] rounded-full absolute items-center justify-center transition-all duration-300 ease-in-out"
            }
            style={
              good
                ? {
                    transform: "translate(43px, 3px)",
                  }
                : {
                    transform: "translate(3px, 3px)",
                  }
            }
          />
        </label>
        <span className={"text-[18px text-gray-600]"}>Good</span>
      </div>
      <div className={"flex items-center my-[10px] w-[200px]"}>
        <input
          type={"checkbox"}
          checked={cheap}
          id={"cheap"}
          className={"hidden"}
        />
        <label
          htmlFor={"cheap"}
          className={
            "relative rounded-[50px] cursor-pointer inline-block mx-[15px] w-[80px] h-[40px] " +
            (cheap ? "bg-purple-600" : "bg-gray-400")
          }
          onClick={() => {
            handleClick("cheap");
          }}
        >
          <div
            className={
              "bg-white h-[34px] w-[34px] rounded-full absolute items-center justify-center transition-all duration-300 ease-in-out"
            }
            style={
              cheap
                ? {
                    transform: "translate(43px, 3px)",
                  }
                : {
                    transform: "translate(3px, 3px)",
                  }
            }
          />
        </label>
        <span className={"text-[18px text-gray-600]"}>Cheap</span>
      </div>
      <div className={"flex items-center my-[10px] w-[200px]"}>
        <input
          type={"checkbox"}
          checked={fast}
          id={"fast"}
          className={"hidden"}
        />
        <label
          htmlFor={"fast"}
          className={
            "relative rounded-[50px] cursor-pointer inline-block mx-[15px] w-[80px] h-[40px] " +
            (fast ? "bg-purple-600" : "bg-gray-400")
          }
          onClick={() => {
            handleClick("fast");
          }}
        >
          <div
            className={
              "bg-white h-[34px] w-[34px] rounded-full absolute items-center justify-center transition-all duration-300 ease-in-out"
            }
            style={
              fast
                ? {
                    transform: "translate(43px, 3px)",
                  }
                : {
                    transform: "translate(3px, 3px)",
                  }
            }
          />
        </label>
        <span className={"text-[18px text-gray-600]"}>Fast</span>
      </div>
    </div>
  );
}

export default GoodCheapFast;
