import React, { useRef, useState } from "react";

function DrawingApp() {
  const canvas = useRef(null);

  const [option, setOption] = useState({
    size: 5,
    color: "#000",
  });
  const { size, color } = option;
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const setPosition = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (event.buttons !== 1) {
      return;
    }
    const left = (event.target as HTMLCanvasElement).offsetLeft;
    const top = (event.target as HTMLCanvasElement).offsetTop;
    drawCircle(event.clientX - left, event.clientY - top);
    drawLine(
      pos.x - left,
      pos.y - top,
      event.clientX - left,
      event.clientY - top
    );
    setPos({ x: event.clientX, y: event.clientY });
  };

  function drawCircle(x: number, y: number) {
    const ctx = (canvas.current as unknown as HTMLCanvasElement).getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
  function drawLine(x1: number, y1: number, x2: number, y2: number) {
    const ctx = (canvas.current as unknown as HTMLCanvasElement).getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  }

  const handleClickMinusBtn = () => {
    setOption({
      ...option,
      size: size > 5 ? size - 5 : size,
    });
  };
  const handleClickAddBtn = () => {
    setOption({
      ...option,
      size: size < 50 ? size + 5 : size,
    });
  };
  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption({
      ...option,
      color: (event.target as HTMLInputElement).value,
    });
  };

  const handleClear = () => {
    const ctx = (canvas.current as unknown as HTMLCanvasElement).getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    ctx.clearRect(
      0,
      0,
      (canvas.current as unknown as HTMLCanvasElement).offsetWidth,
      (canvas.current as unknown as HTMLCanvasElement).offsetHeight
    );
  };

  return (
    <div
      className={
        "bg-white flex flex-col items-center justify-center h-screen pt-[66px]"
      }
    >
      <canvas
        ref={canvas}
        className={"border-2 border-solid border-blue-900"}
        width={800}
        height={700}
        onMouseMove={draw}
        onMouseDown={setPosition}
        onMouseEnter={setPosition}
      />
      <div className={"bg-blue-900 flex w-[804px] p-4"}>
        <button
          type={"button"}
          className={
            "bg-transparent inline-flex items-center justify-center text-4xl h-[40px] w-[40px] m-1 p-1 text-white rounded-full hover:bg-white hover:bg-opacity-40"
          }
          onClick={handleClickMinusBtn}
        >
          -
        </button>
        <span
          className={
            "bg-transparent text-2xl text-white inline-flex items-center justify-center h-[40px] w-[40px] m-1 p-1"
          }
        >
          {size}
        </span>
        <button
          type={"button"}
          className={
            "bg-transparent inline-flex items-center justify-center text-4xl h-[40px] w-[40px] m-1 p-1 text-white rounded-full hover:bg-white hover:bg-opacity-40"
          }
          onClick={handleClickAddBtn}
        >
          +
        </button>
        <input
          className={
            "bg-white cursor-pointer inline-flex items-center justify-center h-[40px] w-[40px] m-1 p-1"
          }
          type={"color"}
          value={color}
          onChange={handleChangeColor}
        />
        <button
          type={"button"}
          className={
            "ml-auto bg-transparent inline-flex items-center justify-center text-2xl h-[40px] w-[40px] m-1 p-1 text-white rounded-full hover:bg-white hover:bg-opacity-40"
          }
          onClick={handleClear}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default DrawingApp;
