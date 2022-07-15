import React, { useCallback, useEffect, useState } from "react";
import { classNames } from "../utils/ClassNames";

const CounterNumber = ({ num }: { num: number }) => {
  const [status, setStatus] = useState("show");

  const handleSetStatus = useCallback(() => {
    let timeout: NodeJS.Timeout;
    if (num !== 0) {
      timeout = setTimeout(() => {
        setStatus(status === "hide" ? "show" : "hide");
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [status, num]);

  useEffect(() => {
    handleSetStatus();
  }, [handleSetStatus]);
  return (
    <span
      className={classNames(
        "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[120deg] origin-bottom",
        status === "show" ? "rotate-0 animate-goIn" : "animate-goOut"
      )}
    >
      {num}
    </span>
  );
};

function AnimationCountdown() {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (counter > -1) {
      timeout = setTimeout(
        () => {
          setCounter(counter - 1);
        },
        counter === 0 ? 500 : 1000
      );
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <div className={"h-screen w-screen pt-[66px] overflow-hidden"}>
      {counter !== -1 ? (
        <div
          className={classNames(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
            counter === 0 ? "delay-500 animate-hide scale-0" : ""
          )}
        >
          <div
            className={
              "text-sky-700 text-[50px] relative overflow-hidden w-[250px] h-[50px]"
            }
          >
            <CounterNumber num={counter} />
          </div>
          <div className={"font-bold text-2xl m-[5px] uppercase"}>
            Get Ready
          </div>
        </div>
      ) : (
        <div
          className={
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center animate-show"
          }
        >
          <h1 className={"text-3xl font-bold mb-5"}>GO</h1>
          <button
            type={"button"}
            className={"rounded text-white bg-blue-900 font-semibold px-5"}
            onClick={() => {
              setCounter(3);
            }}
          >
            Replay
          </button>
        </div>
      )}
    </div>
  );
}

export default AnimationCountdown;
