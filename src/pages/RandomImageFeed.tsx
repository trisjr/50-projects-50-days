import React from "react";
import { useTitle } from "../hooks/useTitle";

function RandomImageFeed() {
  useTitle("Random Image Feed");

  function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
  }

  function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
  }

  const images = new Array(15);
  for (let i = 0; i < 15; i++) {
    images[i] = `${"https://source.unsplash.com/random/"}${getRandomSize()}`;
  }

  return (
    <div
      className={
        "flex flex-col items-center justify-center min-h-screen pt-[66px]"
      }
    >
      <h1 className={"text-3xl font-bold py-4"}>Random Image Feed</h1>
      <div
        className={"flex items-center justify-center flex-wrap max-w-[1000px]"}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={"Anh"}
            className={"object-cover m-[10px] h-[300px] w-[300px] max-w-full"}
          />
        ))}
      </div>
    </div>
  );
}

export default RandomImageFeed;
