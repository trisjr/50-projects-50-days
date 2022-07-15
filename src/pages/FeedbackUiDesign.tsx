import React, { useState } from "react";
import { classNames } from "../utils/ClassNames";

import { FaHandHoldingHeart } from "react-icons/fa";
import {
  RiEmotionUnhappyFill,
  RiEmotionHappyFill,
  RiEmotionNormalFill,
} from "react-icons/ri";
import { useTitle } from "../hooks/useTitle";

function FeedbackUiDesign() {
  useTitle("Feedback Ui Design");
  const [rating, setRating] = useState({
    value: "",
    rated: false,
  });
  const { value, rated } = rating;
  return (
    <div
      className={
        "flex items-center justify-center h-screen overflow-hidden pt-[66px] bg-slate-200"
      }
    >
      <div
        className={
          "bg-white rounded flex flex-col justify-center items-center text-center p-[30px] max-w-[400px] shadow"
        }
      >
        {rated ? (
          <>
            <i className={"text-red-700 text-3xl"}>
              <FaHandHoldingHeart />
            </i>
            <div className={"font-bold text-2xl py-4"}>Thank Your!</div>
            <div
              className={"font-semibold py-3"}
            >{`Feedback: ${value.toUpperCase()}`}</div>
            <p>We'll use your feedback to improve our customer support</p>
          </>
        ) : (
          <>
            <div className={"leading-[20px]"}>
              How satisfied are you with our customer support performance?
            </div>
            <div className={"flex my-[20px]"}>
              <div
                className={classNames(
                  "flex-1 flex flex-col items-center justify-center cursor-pointer p-[20px] mx-[5px] my-[10px] hover:scale-110 transition-all duration-300 ease-in",
                  value === "unhappy" ? "text-red-700" : ""
                )}
                onClick={() => {
                  setRating({
                    ...rating,
                    value: "unhappy",
                  });
                }}
              >
                <i className={"text-3xl"}>
                  <RiEmotionUnhappyFill />
                </i>
                <div className={"mt-4 text-sm"}>Unhappy</div>
              </div>
              <div
                className={classNames(
                  "flex-1 flex flex-col items-center justify-center cursor-pointer p-[20px] mx-[5px] my-[10px] hover:scale-110 transition-all duration-300 ease-in",
                  value === "normal" ? "text-sky-700" : ""
                )}
                onClick={() => {
                  setRating({
                    ...rating,
                    value: "normal",
                  });
                }}
              >
                <i className={"text-3xl"}>
                  <RiEmotionNormalFill />
                </i>
                <div className={"mt-4 text-sm"}>Normal</div>
              </div>
              <div
                className={classNames(
                  "flex-1 flex flex-col items-center justify-center cursor-pointer p-[20px] mx-[5px] my-[10px] hover:scale-110 transition-all duration-300 ease-in",
                  value === "happy" ? "text-green-700" : ""
                )}
                onClick={() => {
                  setRating({
                    ...rating,
                    value: "happy",
                  });
                }}
              >
                <i className={"text-3xl"}>
                  <RiEmotionHappyFill />
                </i>
                <div className={"mt-4 text-sm"}>Happy</div>
              </div>
            </div>
            <button
              className={"bg-blue-900 text-white rounded px-[30px] py-[12px]"}
              type={"button"}
              onClick={() => {
                setRating({
                  ...rating,
                  rated: true,
                });
              }}
            >
              Send Review
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FeedbackUiDesign;
