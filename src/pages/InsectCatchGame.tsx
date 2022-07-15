import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../utils/ClassNames";

const monsters = [
  {
    name: "fly",
    image: "https://pngimg.com/uploads/fly/fly_PNG3946.png",
  },
  {
    name: "mosquito",
    image: "https://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  },
  {
    name: "spider",
    image: "https://pngimg.com/uploads/spider/spider_PNG12.png",
  },
  {
    name: "roach",
    image: "https://pngimg.com/uploads/roach/roach_PNG12163.png",
  },
];

const Insect = ({
  monster,
  pos,
  rotate,
  action,
}: {
  monster: { name: string; image: string };
  pos: { x: number; y: number };
  rotate: number;
  action: () => void;
}) => {
  const [status, setStatus] = useState(false);
  return (
    <div
      className={"ease-in duration-300 transition-all fixed cursor-pointer"}
      onClick={() => {
        action();
        setStatus(true);
      }}
      style={{
        top: `${pos.y}px`,
        left: `${pos.x}px`,
        transform: `rotate(${rotate}deg) scale(${status ? 0 : 1})`,
        opacity: status ? 0 : 1,
      }}
    >
      <img
        src={monster.image}
        alt={"insect"}
        className={"h-[100px] w-[100px]"}
      />
    </div>
  );
};

function InsectCatchGame() {
  const ref = useRef(null);
  const [step, setStep] = useState(0);
  const [monster, setMonster] = useState({ name: "", image: "" });
  const [time, setTime] = useState(-1);
  const [score, setScore] = useState(0);
  const [insect, setInsect] = useState<any[]>([]);

  const getRandomLocation = () => {
    const width = (ref.current as unknown as HTMLElement)?.offsetWidth;
    const height = (ref.current as unknown as HTMLElement)?.offsetHeight;
    const x = Math.floor(Math.random() * (width - 200) + 100);
    const y = Math.floor(Math.random() * (height - 200) + 100);
    return { x, y };
  };

  const handleCreateInsect = () => {
    setInsect([
      ...insect,
      {
        monster,
        pos: getRandomLocation(),
        rotate: Math.floor(Math.random() * 360),
      },
      {
        monster,
        pos: getRandomLocation(),
        rotate: Math.floor(Math.random() * 360),
      },
    ]);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div
      className={
        "bg-blue-500 font-game text-white h-screen overflow-hidden pt-[66px] text-center"
      }
    >
      <div
        className={classNames(
          "flex flex-col items-center justify-center h-screen w-screen transition-all duration-500 ease-out",
          step > 0 ? "-mt-[100vh]" : ""
        )}
      >
        <h1 className={"text-4xl py-8"}>Catch The Insect</h1>
        <button
          type={"button"}
          className={
            "bg-white text-blue-500 px-[20px] py-[15px] cursor-pointer"
          }
          onClick={() => {
            setStep(1);
          }}
        >
          Play Game
        </button>
      </div>
      <div
        className={classNames(
          "flex flex-col items-center justify-center h-screen w-screen transition-all duration-500 ease-out",
          step > 1 ? "-mt-[100vh]" : ""
        )}
      >
        <h3 className={"text-4xl py-8"}>What is your "favorite" insect?</h3>
        <ul className={"flex flex-wrap justify-center"}>
          {monsters.map((item, index) => (
            <li className={"m-[10px]"} key={index}>
              <button
                type={"button"}
                className={
                  "bg-transparent border border-white text-white w-[150px] h-[150px] flex flex-col items-center justify-center"
                }
                onClick={() => {
                  setMonster(item);
                  setInsect([
                    {
                      monster: item,
                      pos: getRandomLocation(),
                      rotate: Math.floor(Math.random() * 360),
                    },
                  ]);
                  setStep(2);
                  setTime(0);
                }}
              >
                <div>{item.name}</div>
                <img
                  className={"w-[100px] h-[100px] object-contain"}
                  src={item.image}
                  alt={item.name}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={classNames(
          "justify-between flex h-screen w-screen transition-all duration-500 ease-out",
          step > 2 ? "-mt-[100vh]" : ""
        )}
        ref={ref}
      >
        <div className={"pt-3 ml-2"}>{`Time: ${
          Math.floor(time / 60) > 10
            ? Math.floor(time / 60)
            : "0" + Math.floor(time / 60)
        }:${time % 60 > 10 ? time % 60 : "0" + (time % 60)}`}</div>
        <div className={"pt-3 mr-2"}>{`Score: ${score}`}</div>
        {step === 2 ? (
          insect.map((item, index) => (
            <Insect
              monster={item.monster}
              pos={item.pos}
              rotate={item.rotate}
              action={() => {
                setScore(score + 1);
                handleCreateInsect();
              }}
              key={index}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default InsectCatchGame;
