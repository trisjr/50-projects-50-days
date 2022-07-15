import React, { useState } from "react";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

function RandomChoicePicker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [select, setSelect] = useState(-1);
  const handleSetText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setResult(e.target.value);
    setSelect(-1);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.value) {
        randomSelect();
        setText("");
      } else {
        setResult("");
      }
    }
  };

  const handleEditText = () => {
    return result
      .split(",")
      .filter((item) => item.trim() !== "")
      .map((item) => item.trim());
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * handleEditText().length);
  };

  function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = randomNumber();

      setSelect(randomTag);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = randomNumber();

        setSelect(randomTag);
      }, 100);
    }, times * 100);
  }

  return (
    <div
      className={
        "bg-sky-700 flex flex-col items-center justify-center overflow-hidden w-screen h-screen pt-[66px]"
      }
    >
      <div className={"w-[600px]"}>
        <div className={"font-bold text-2xl text-center mt-3 mb-5 text-white"}>
          Enter all of the choices divided by a comma (',').
          <br />
          Press enter when you're done
        </div>
        <textarea
          className={
            "w-full h-[100px] block p-[10px] mb-[20px] focus:outline-none rounded"
          }
          placeholder={"Enter choices here..."}
          id={"textarea"}
          value={text}
          onChange={handleSetText}
          onKeyDown={handleKeyDown}
        />
        <div>
          {handleEditText().map((item, index) => (
            <div
              className={classNames(
                "cursor-pointer text-[14px] text-white rounded-full px-[20px] py-[10px] mr-3 mb-2 inline-block",
                index === select ? "bg-blue-900" : "bg-orange-500"
              )}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RandomChoicePicker;
