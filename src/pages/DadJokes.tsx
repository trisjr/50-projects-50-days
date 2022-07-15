import React, { useState } from "react";

const jokes = [
  "What’s the best thing about Switzerland?",
  "Did you hear about the mathematician who’s afraid of negative numbers?",
  "Helvetica and Times New Roman walk into a bar.",
  "A woman in labor suddenly shouted, “Shouldn’t! Wouldn't! Couldn't! Didn't! Can't!”",
  "A bear walks into a bar and says, “Give me a whiskey and … cola.”",
  "Did you hear about the actor who fell through the floorboards?",
];

function DadJokes() {
  const [joke, setJoke] = useState(jokes[0]);
  const handleSetJoke = () => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  };
  return (
    <div
      className={
        "bg-sky-700 w-screen h-screen pt-[66px] flex flex-col items-center justify-center overflow-hidden"
      }
    >
      <div
        className={
          "bg-white rounded-lg px-[50px] py-[20px] text-center max-w-full w-[800px] shadow-2xl"
        }
      >
        <h1 className={"font-bold text-2xl"}>Don't Laugh Challenge</h1>
        <div className={"text-3xl my-8 mx-auto max-w-[600px]"}>{joke}</div>
        <button
          type={"button"}
          className={
            "px-[40px] py-[10px] bg-blue-400 text-white rounded active:scale-90"
          }
          onClick={handleSetJoke}
        >
          Get Joke
        </button>
      </div>
    </div>
  );
}

export default DadJokes;
