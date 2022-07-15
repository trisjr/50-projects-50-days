import React, { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { classNames } from "../utils/ClassNames";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getTimeNow = () => {
  const date = new Date();
  return {
    month: date.getMonth(),
    day: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours() % 12,
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: date.getHours() >= 12 ? "PM" : "AM",
  };
};

function ThemeClock() {
  useTitle("Theme Clock");
  const [time, setTime] = useState(getTimeNow);

  const { month, day, date, hours, minutes, seconds, ampm } = time;

  const [theme, setTheme] = useState("dark");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeNow);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={classNames(
        "flex items-center justify-center h-screen pt-[66px] overflow-hidden",
        theme === "light" ? "bg-white" : "bg-black"
      )}
    >
      <button
        type={"button"}
        className={classNames(
          "first-letter:uppercase rounded py-[8px] px-[12px] absolute top-32 font-bold",
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        )}
        onClick={handleChangeTheme}
      >{`${theme} mode`}</button>
      <div className={"flex flex-col justify-between items-center"}>
        <div className={"relative w-[200px] h-[200px]"}>
          <div
            className={classNames(
              "absolute top-1/2 left-1/2 h-[65px] w-[3px] origin-bottom transition-all duration-500 ease-in",
              theme === "light" ? "bg-black" : "bg-white"
            )}
            style={{
              transform: `translate(-50%, -100%) rotate(${
                ((hours + minutes / 60) * 360) / 12
              }deg)`,
            }}
          />
          <div
            className={classNames(
              "absolute top-1/2 left-1/2 w-[3px] h-[100px] origin-bottom transition-all duration-500 ease-in",
              theme === "light" ? "bg-black" : "bg-white"
            )}
            style={{
              transform: `translate(-50%, -100%) rotate(${
                (minutes * 360) / 60
              }deg)`,
            }}
          />
          <div
            className={
              "absolute top-1/2 left-1/2 w-[3px] h-[100px] bg-orange-700 origin-bottom transition-all duration-500 ease-in"
            }
            style={{
              transform: `translate(-50%, -100%) rotate(${
                (seconds * 360) / 60
              }deg)`,
            }}
          />
          <div
            className={
              "bg-orange-700 w-[10px] h-[10px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full after:content-[' '] after:absolute after:bg-white after:w-[5px] after:h-[5px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full"
            }
          />
        </div>
        <div
          className={classNames(
            "text-6xl font-thin tracking-wider mt-8 transition-all duration-500 ease-in",
            theme === "light" ? "text-black" : "text-white"
          )}
        >{`${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`}</div>
        <div
          className={
            "text-gray-500 uppercase tracking-wider mt-2 items-center transition-all duration-500 ease-in"
          }
        >
          {`${days[day]}, ${months[month]}`}
          <span
            className={classNames(
              "rounded-full h-[18px] w-[18px] text-[11px] inline-flex items-center justify-center transition-all duration-500 ease-in ml-3",
              theme === "light" ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ThemeClock;
