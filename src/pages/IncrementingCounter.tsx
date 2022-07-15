import React, { useEffect, useState } from "react";

import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

function IncrementingCounter() {
  const [value, setValue] = useState({
    twitter: 0,
    youtube: 0,
    facebook: 0,
  });
  const { twitter, youtube, facebook } = value;

  useEffect(() => {
    const interval = setInterval(() => {
      setValue({
        twitter: twitter + 12000 / 200,
        youtube: youtube + 5000 / 200,
        facebook: facebook + 7500 / 200,
      });
    }, 10);
    if (twitter === 12000) clearInterval(interval);
    return () => clearInterval(interval);
  });
  return (
    <div
      className={
        "bg-purple-500 text-white flex justify-center items-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <div
        className={
          "flex flex-col justify-center text-center mx-[50px] my-[30px]"
        }
      >
        <i className={"text-6xl flex justify-center"}>
          <FaTwitter />
        </i>
        <div className={"text-6xl w-[200px] mt-[20px]"}>{twitter}</div>
        <span className={"mt-[10px]"}>Twitter Followers</span>
      </div>
      <div
        className={
          "flex flex-col justify-center text-center mx-[50px] my-[30px]"
        }
      >
        <i className={"text-6xl flex justify-center"}>
          <FaYoutube />
        </i>
        <div className={"text-6xl w-[200px] mt-[20px]"}>{youtube}</div>
        <span className={"mt-[10px]"}>YouTube Subscribers</span>
      </div>
      <div
        className={
          "flex flex-col justify-center text-center mx-[50px] my-[30px]"
        }
      >
        <i className={"text-6xl flex justify-center"}>
          <FaFacebook />
        </i>
        <div className={"text-6xl w-[200px] mt-[20px]"}>
          {Math.floor(facebook)}
        </div>
        <span className={"mt-[10px]"}>Facebook Fans</span>
      </div>
    </div>
  );
}

export default IncrementingCounter;
