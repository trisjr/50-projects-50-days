import React, { useState } from "react";

import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const questions = [
  {
    title: "Why shouldn't we trust atoms?",
    text: "They make up everything",
  },
  {
    title: "What do you call someone with no body and no nose?",
    text: "Nobody knows.",
  },
  {
    title: "What's the object-oriented way to become wealthy?",
    text: "Inheritance",
  },
  {
    title: "How many tickles does it take to tickle an octopus?",
    text: "Ten-tickles!",
  },
];

const Question = (props: any) => {
  const [active, setActive] = useState(false);
  const handleSetActive = () => {
    setActive(!active);
  };
  return (
    <div
      className={classNames(
        "border border-solid border-gray-700 rounded-lg my-[20px] p-[30px] relative overflow-hidden transition-all duration-300 ease-in-out",
        active ? "shadow-md bg-white" : "bg-transparent"
      )}
    >
      <div className={"text-[18px] font-bold"}>{props.title}</div>
      <p className={classNames("mt-6", active ? "block" : "hidden")}>
        {props.text}
      </p>
      <button
        type={"button"}
        className={classNames(
          "text-2xl rounded-full flex items-center justify-center absolute top-[30px] right-[30px] h-[30px] w-[30px]",
          active ? "bg-gray-400 text-white" : "bg-transparent"
        )}
        onClick={handleSetActive}
      >
        <i>{active ? <MdClose /> : <MdKeyboardArrowDown />}</i>
      </button>
    </div>
  );
};

function FaqCollapse() {
  return (
    <div className={"w-screen h-screen pt-[66px] bg-gray-200"}>
      <h1 className={"font-bold text-3xl text-center mt-10 mb-5"}>
        Frequently Asked Questions
      </h1>
      <div className={"max-w-[600px] my-0 mx-auto"}>
        {questions.map((item, index) => (
          <Question key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default FaqCollapse;
