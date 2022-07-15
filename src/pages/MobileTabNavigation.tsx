import React, { useState } from "react";
import { classNames } from "../utils/ClassNames";

import { MdHome, MdHomeWork, MdMenuBook } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
];

function MobileTabNavigation() {
  const [step, setStep] = useState(0);

  const handleSetStep = (value: number) => {
    setStep(value);
  };

  return (
    <div
      className={
        "bg-blue-900 flex items-center justify-center h-screen pt-[66px]"
      }
    >
      <div
        className={
          "relative overflow-hidden border-[3px] border-white rounded-[15px] h-[600px] w-[340px]"
        }
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={"anh"}
            className={classNames(
              "object-cover absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in",
              step === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <nav className={"absolute bottom-0 left-0 mt-[5px] w-full"}>
          <ul className={"bg-white flex h-[60px]"}>
            <li
              className={
                "cursor-pointer flex-1 p-[10px] flex flex-col items-center"
              }
              onClick={() => {
                handleSetStep(0);
              }}
            >
              <i>
                <MdHome />
              </i>
              <p className={"text-[12px] my-[2px]"}>Home</p>
            </li>
            <li
              className={
                "cursor-pointer flex-1 p-[10px] flex flex-col items-center"
              }
              onClick={() => {
                handleSetStep(1);
              }}
            >
              <i>
                <MdHomeWork />
              </i>
              <p className={"text-[12px] my-[2px]"}>Work</p>
            </li>
            <li
              className={
                "cursor-pointer flex-1 p-[10px] flex flex-col items-center"
              }
              onClick={() => {
                handleSetStep(2);
              }}
            >
              <i>
                <MdMenuBook />
              </i>
              <p className={"text-[12px] my-[2px]"}>Blog</p>
            </li>
            <li
              className={
                "cursor-pointer flex-1 p-[10px] flex flex-col items-center"
              }
              onClick={() => {
                handleSetStep(3);
              }}
            >
              <i>
                <FaUsers />
              </i>
              <p className={"text-[12px] my-[2px]"}>About Us</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileTabNavigation;
