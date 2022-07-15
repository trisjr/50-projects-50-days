import React, { ChangeEvent, useEffect, useState } from "react";

function AutoTextEffect() {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(10);
  const value = "I love chang!";

  const handleChangeSpeed = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target?.value as unknown as number);
  };

  useEffect(() => {
    let index = 0;
    let internal = setInterval(() => {
      if (index <= value.length) {
        setText(value.slice(0, index));
        index++;
      } else {
        index = 1;
      }
    }, 300 / speed);
    return () => {
      clearInterval(internal);
    };
  }, [speed]);
  return (
    <div
      className={
        "bg-blue-900 flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden m-0"
      }
    >
      <div className={"text-white font-bold text-3xl"}>{text}</div>
      <div
        className={
          "absolute bottom-[20px] bg-black bg-opacity-5 text-white p-2"
        }
      >
        <label htmlFor={"speed"}>Speed</label>
        <input
          className={"w-[50px] p-[5px] bg-blue-900 text-white text-center"}
          type={"number"}
          step={1}
          value={speed}
          max={100}
          min={1}
          name={"speed"}
          id={"speed"}
          onChange={handleChangeSpeed}
        />
      </div>
    </div>
  );
}

export default AutoTextEffect;
