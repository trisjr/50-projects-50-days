import React, { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { classNames } from "../utils/ClassNames";

function DrinkWater() {
  useTitle("Drink Water");

  const [water, setWater] = useState(0);
  const cups = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      className={
        "bg-blue-400 text-white flex flex-col items-center pb-[40px] pt-[66px] h-screen min-h-[833px]"
      }
    >
      <h1 className={"font-bold text-3xl mt-[10px]"}>Drink Water</h1>
      <h3 className={"font-semibold text-2xl my-[10px]"}>Goal: 2 Liters</h3>
      <div
        className={
          "relative cursor-pointer bg-white border-[4px] border-blue-900 rounded-b-[40px] h-[330px] w-[150px] my-[30px] flex flex-col overflow-hidden"
        }
        onClick={() => {
          setWater(0);
        }}
      >
        <div
          className={
            "flex flex-col items-center justify-center text-center flex-1 transition-all duration-300 ease-in-out h-0"
          }
        >
          <span className={"font-bold text-blue-900 text-2xl"}>{`${
            2 - water
          }L`}</span>
          <small className={"text-blue-900"}>Remained</small>
        </div>
        <div
          className={
            "bg-blue-500 text-white flex items-center justify-center font-bold text-3xl transition-all duration-300 ease-in-out"
          }
          style={{ height: `${(water * 100) / 2}%` }}
        >{`${(water * 100) / 2}%`}</div>
      </div>
      <p className={"text-center mb-[5px]"}>
        Select how many glasses of water that you have drank
      </p>
      <div className={"flex flex-wrap items-center justify-center w-[280px]"}>
        {cups.map((item) => (
          <div
            key={item}
            className={classNames(
              "font-semibold border-[4px] border-solid border-blue-900 flex flex-col overflow-hidden h-[95px] w-[50px] rounded-b-[15px] cursor-pointer items-center justify-center text-center m-[5px] transition-all duration-300 ease-in-out text-[18px]",
              item <= water / (2 / cups.length)
                ? "bg-blue-500"
                : "text-blue-900 bg-white"
            )}
            onClick={() => {
              setWater(item * (2 / cups.length));
            }}
          >{`${Math.floor((2 * 1000) / cups.length)} ml`}</div>
        ))}
      </div>
    </div>
  );
}

export default DrinkWater;
