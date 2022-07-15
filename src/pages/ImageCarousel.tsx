import React, { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";

const images = [
  "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
];

function ImageCarousel() {
  useTitle("Image Carousel");
  const [pos, setPos] = useState(0);

  const handleNext = () => {
    setPos(pos < 3 ? pos + 1 : 0);
  };
  const handlePrev = () => {
    setPos(pos > 0 ? pos - 1 : 3);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setPos(pos < 3 ? pos + 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [pos]);

  return (
    <div className={"flex items-center justify-center h-screen m-0 pt-[66px]"}>
      <div className={"shadow h-[540px] w-[500px] overflow-hidden"}>
        <div
          className={
            "flex translate-x-0 transition-transform duration-500 ease-in-out"
          }
          style={{
            transform: `translateX(-${pos * 500}px)`,
          }}
        >
          {images.map((image, index) => (
            <img
              className={"w-[500px] h-[500px] object-cover"}
              src={image}
              key={index}
              alt={"Anh"}
            />
          ))}
        </div>
        <div className={"flex justify-between"}>
          <button
            type={"button"}
            className={"bg-blue-900 text-white font-semibold p-2 w-[49.5%]"}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            type={"button"}
            className={"bg-blue-900 text-white font-semibold p-2 w-[49.5%]"}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
