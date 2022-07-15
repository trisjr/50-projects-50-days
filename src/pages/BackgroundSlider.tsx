import React, { useState } from "react";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useTitle } from "../hooks/useTitle";

const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

function BackgroundSlider() {
  useTitle("Background Slider");
  const [image, setImage] = useState(0);
  const handlePrev = () => {
    if (image === 0) setImage(images.length - 1);
    else setImage(image - 1);
  };
  const handleNext = () => {
    if (image === images.length - 1) setImage(0);
    else setImage(image + 1);
  };
  return (
    <div
      className={
        "flex flex-col items-center justify-center mt-[66px] overflow-hidden m-0 bg-center bg-cover transition-all duration-500 ease-in-out before:content-[' '] before:absolute before:top-0 before:left-0 before:w-full before:h-screen before:bg-black before:opacity-80 before:z-0"
      }
      style={{
        backgroundImage: `url(${images[image]})`,
        height: "calc(100vh - 66px)",
      }}
    >
      <div className={"shadow h-[70vh] w-[70vw] relative overflow-hidden"}>
        <div
          className={
            "w-screen bg-cover bg-center absolute -top-[9vh] -left-[15vw] transition-all duration-500 ease-in-out z-10"
          }
          style={{
            backgroundImage: `url(${images[image]})`,
            height: "calc(100vh - 66px)",
          }}
        />
        <button
          type={"button"}
          className={
            "fixed bg-transparent text-white p-1 text-4xl rounded-full hover:bg-white hover:bg-opacity-10 top-1/2 -translate-y-1/2 left-[36px] transition-all duration-500 ease-in-out hover:scale-125"
          }
          onClick={handlePrev}
        >
          <FaCaretLeft />
        </button>
        <button
          type={"button"}
          className={
            "fixed bg-transparent text-white p-1 text-4xl rounded-full hover:bg-white hover:bg-opacity-10 top-1/2 -translate-y-1/2 right-[36px] transition-all duration-500 ease-in-out hover:scale-125"
          }
          onClick={handleNext}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
}

export default BackgroundSlider;
