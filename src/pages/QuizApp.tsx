import React, { useState } from "react";
import { useTitle } from "../hooks/useTitle";

const Quest = ({
  question = "Which language runs in a web browser?",
  answer = ["Java", "C", "Python", "Javascript"],
  result = "Javascript",
  onChange = () => {},
}: {
  question?: string;
  answer?: Array<string>;
  result?: string;
  onChange?: (value: boolean) => void;
}) => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === result);
    setValue(event.target.value);
  };
  return (
    <div className={"p-16"}>
      <div className={"text-3xl font-bold text-center p-4"}>{question}</div>
      <ul className={"p-0"}>
        {answer.map((item, index) => (
          <li key={index} className={"py-4"}>
            <input
              type={"radio"}
              value={item}
              checked={value === item}
              id={index.toString()}
              onChange={handleChange}
            />
            <label className={"cursor-pointer ml-5"} htmlFor={index.toString()}>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const quests = [
  {
    question: "Which language runs in a web browser?",
    answer: ["Java", "C", "Python", "Javascript"],
    result: "Javascript",
  },
  {
    question: "What does CSS stand for?",
    answer: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    result: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    answer: [
      "HyperText Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    result: "HyperText Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    answer: ["1996", "1995", "1994", " none of the above"],
    result: "1995",
  },
];

function QuizApp() {
  useTitle("Quiz App");
  const initResult = {
    one: false,
    two: false,
    three: false,
    four: false,
  };
  const [result, setResult] = useState(initResult);
  const [step, setStep] = useState(0);

  return (
    <div
      className={
        "bg-slate-200 flex items-center justify-center h-screen [t-[66px]"
      }
    >
      <div
        className={"bg-white rounded-[10px] shadow w-[600px] overflow-hidden"}
      >
        {step === 0 && (
          <Quest
            question={quests[step]?.question}
            answer={quests[step]?.answer}
            result={quests[step]?.result}
            onChange={(value) => {
              setResult({
                ...result,
                one: value,
              });
            }}
          />
        )}
        {step === 1 && (
          <Quest
            question={quests[step]?.question}
            answer={quests[step]?.answer}
            result={quests[step]?.result}
            onChange={(value) => {
              setResult({
                ...result,
                two: value,
              });
            }}
          />
        )}
        {step === 2 && (
          <Quest
            question={quests[step]?.question}
            answer={quests[step]?.answer}
            result={quests[step]?.result}
            onChange={(value) => {
              setResult({
                ...result,
                three: value,
              });
            }}
          />
        )}
        {step === 3 && (
          <Quest
            question={quests[step]?.question}
            answer={quests[step]?.answer}
            result={quests[step]?.result}
            onChange={(value) => {
              setResult({
                ...result,
                four: value,
              });
            }}
          />
        )}
        {step === 4 && (
          <div
            className={"text-3xl font-bold text-center p-4"}
          >{`You answered ${
            Object.keys(result).filter(function (key, index) {
              return Object.values(result)[index];
            }).length
          }/4 questions correctly`}</div>
        )}
        {step !== 4 ? (
          <button
            className={
              "bg-purple-800 text-white font-semibold block w-full p-5 text-lg"
            }
            type={"button"}
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className={
              "bg-purple-800 text-white font-semibold block w-full p-5 text-lg"
            }
            type={"button"}
            onClick={() => {
              setStep(0);
              setResult(initResult);
            }}
          >
            Reload
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
