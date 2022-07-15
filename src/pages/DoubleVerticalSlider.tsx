import React, { useEffect, useRef, useState } from "react";

import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useTitle } from "../hooks/useTitle";

const images = [
  "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80",
  "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80",
  "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80",
];

function DoubleVerticalSlider() {
  useTitle("Double Vertical Slider");
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  const [step, setStep] = useState(0);
  const handlePrevStep = () => {
    setStep(step > 0 ? step - 1 : 3);
  };
  const handleNextStep = () => {
    setStep(step < 3 ? step + 1 : 0);
  };

  useEffect(() => {
    setHeight(
      (ref?.current as unknown as HTMLElement).getBoundingClientRect().height
    );
  }, []);
  return (
    <div className={"h-screen pt-[66px]"}>
      <div className={"relative overflow-hidden w-screen h-full"}>
        <div
          ref={ref}
          className={
            "h-full w-1/3 absolute -top-[300%] left-0 transition-transform duration-500 ease-in-out"
          }
          style={{
            transform: `translateY(${step * height}px`,
          }}
        >
          <div
            className={
              "h-full w-full flex flex-col items-center justify-center text-white bg-pink-700"
            }
          >
            <h1 className={"text-3xl -mb-2 -mt-6"}>Nature flower</h1>
            <p className={"mt-4 italic"}>all in pink</p>
          </div>
          <div
            className={
              "h-full w-full flex flex-col items-center justify-center text-white bg-sky-600"
            }
          >
            <h1 className={"text-3xl -mb-2 -mt-6"}>Blue Sky</h1>
            <p className={"mt-4 italic"}>with it's mountains</p>
          </div>
          <div
            className={
              "h-full w-full flex flex-col items-center justify-center text-white bg-gray-700"
            }
          >
            <h1 className={"text-3xl -mb-2 -mt-6"}>Lonely castle</h1>
            <p className={"mt-4 italic"}>in the wilderness</p>
          </div>
          <div
            className={
              "h-full w-full flex flex-col items-center justify-center text-white bg-orange-400"
            }
          >
            <h1 className={"text-3xl -mb-2 -mt-6"}>Flying eagle</h1>
            <p className={"mt-4 italic"}>in the sunset</p>
          </div>
        </div>
        <div
          className={
            "h-full absolute top-0 left-1/3 w-2/3 transition-transform duration-500 ease-in-out"
          }
          style={{
            transform: `translateY(-${step * height}px`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={"bg-no-repeat bg-cover bg-center h-full w-full"}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>
        <div>
          <button
            type={"button"}
            className={
              "bg-white text-gray-700 text-2xl p-[15px] absolute left-1/3 top-1/2 z-50 -translate-x-full rounded-l"
            }
            onClick={handlePrevStep}
          >
            <BsCaretDownFill />
          </button>
          <button
            type={"button"}
            className={
              "bg-white text-gray-700 text-2xl p-[15px] absolute left-1/3 top-1/2 z-50 -translate-y-full rounded-l"
            }
            onClick={handleNextStep}
          >
            <BsCaretUpFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoubleVerticalSlider;
