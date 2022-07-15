import React, { useState } from "react";
import { useTitle } from "../hooks/useTitle";

function CustomRangerSlider() {
  useTitle("Custom Ranger Slider");
  const [range, setRange] = useState(40);
  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden w-screen"
      }
    >
      <div className={"text-2xl font-bold absolute top-[76px]"}>
        Custom Range Slider
      </div>
      <div className={"relative"}>
        <input
          className={"w-[300px] my-[18px]"}
          type={"range"}
          min={0}
          max={100}
          step={1}
          value={range}
          onChange={(e) => {
            setRange(parseInt(e.target.value));
          }}
        />
        <label
          className={
            "bg-white shadow absolute -top-[25px] w-[80px] py-[5px] text-center rounded"
          }
          style={{
            left: `${range}%`,
            transform: "translateX(-50%)",
          }}
        >
          {range}
        </label>
      </div>
    </div>
  );
}

export default CustomRangerSlider;
