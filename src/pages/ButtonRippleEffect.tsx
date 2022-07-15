import React, { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";

function ButtonRippleEffect() {
  useTitle("Button Ripple Effect");
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [isRippling, coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = (event.target as HTMLButtonElement).getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };
  console.log();
  return (
    <div
      className={
        "flex items-center justify-center h-screen pt-[66px] bg-black peer-valid:"
      }
    >
      <button
        type={"button"}
        className={
          "bg-purple-600 px-10 py-4 rounded text-[16px] uppercase text-white overflow-hidden relative"
        }
        onClick={handleClick}
      >
        Buttons
        {isRippling && (
          <span
            className={
              "absolute bg-white w-[50px] h-[50px] rounded-full -translate-y-1/2 -translate-x-1/2 animate-scale opacity-40"
            }
            style={{
              left: coords.x,
              top: coords.y,
            }}
          ></span>
        )}
      </button>
    </div>
  );
}

export default ButtonRippleEffect;
