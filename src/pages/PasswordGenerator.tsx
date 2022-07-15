import React, { ChangeEvent, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { useTitle } from "../hooks/useTitle";
import { UseShuffle } from "../hooks/useShuffle";

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_=+-[]{};:?/>,<>";

function PasswordGenerator() {
  useTitle("Password Generator");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState({
    length: 12,
    includeUppercaseLetters: true,
    includeLowercaseLetters: true,
    includeNumbers: true,
    includeSymbols: true,
  });
  const {
    length,
    includeUppercaseLetters,
    includeLowercaseLetters,
    includeNumbers,
    includeSymbols,
  } = option;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "checkbox") {
      setOption({
        ...option,
        [event.target.id]: event.target.checked,
      });
    } else {
      setOption({
        ...option,
        [event.target.id]: event.target.value,
      });
    }
  };

  const generatePassword = () => {
    let result = "";
    let i = 0;
    if (includeUppercaseLetters) {
      result = result.concat(
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
      );
      i++;
    }
    if (includeLowercaseLetters) {
      result = result.concat(
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
      );
      i++;
    }
    if (includeNumbers) {
      result = result.concat(
        numbers[Math.floor(Math.random() * numbers.length)]
      );
      i++;
    }
    if (includeSymbols) {
      result = result.concat(
        symbols[Math.floor(Math.random() * symbols.length)]
      );
      i++;
    }
    for (i; i < length; i++) {
      const letters =
        (includeLowercaseLetters ? lowercaseLetters : "") +
        (includeUppercaseLetters ? uppercaseLetters : "") +
        (includeSymbols ? symbols : "") +
        (includeNumbers ? numbers : "");
      if (letters === "") result = "";
      else
        result = result.concat(
          letters[Math.floor(Math.random() * letters.length)]
        );
    }
    setPassword(UseShuffle(result));
  };

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password).then(() => {
      alert("Copy data successfully!");
    });
  };

  return (
    <div
      className={
        "bg-blue-700 text-white flex flex-col items-center justify-center h-screen overflow-hidden pt-[66px]"
      }
    >
      <div className={"bg-blue-900 shadow-md p-[20px] w-[350px] max-w-full"}>
        <h1 className={"mt-[10px] mb-[20px] text-center font-bold text-2xl"}>
          Password Generator
        </h1>
        <div
          className={
            "bg-black bg-opacity-40 flex justify-start items-center relative tracking-[1px] py-[12px] px-[15px] h-[50px] w-full"
          }
        >
          <span className={"break-words"}>{password}</span>
          <button
            type={"button"}
            className={
              "bg-sky-700 text-2xl py-[8px] px-[12px] absolute top-[5px] right-[5px] w-[40px] h-[40px] flex items-center justify-center"
            }
            onClick={copyToClipboard}
          >
            <i className={"text-[20px]"}>
              <FaClipboardList />
            </i>
          </button>
        </div>
        <div className={"mt-4"}>
          <div className={"flex justify-between items-center py-[10px]"}>
            <label htmlFor={"length"}>Password Length</label>
            <input
              type={"number"}
              id={"length"}
              min={0}
              max={20}
              step={1}
              value={length}
              onChange={handleChangeInput}
              className={"text-blue-900 pl-2"}
            />
          </div>
          <div className={"flex justify-between items-center py-[10px]"}>
            <label htmlFor={"includeUppercaseLetters"}>
              Include Uppercase Letters
            </label>
            <input
              type={"checkbox"}
              value={"uppercase"}
              id={"includeUppercaseLetters"}
              checked={includeUppercaseLetters}
              onChange={handleChangeInput}
            />
          </div>
          <div className={"flex justify-between items-center py-[10px]"}>
            <label htmlFor={"includeLowercaseLetters"}>
              Include Lowercase Letters
            </label>
            <input
              type={"checkbox"}
              value={"lowercase"}
              id={"includeLowercaseLetters"}
              checked={includeLowercaseLetters}
              onChange={handleChangeInput}
            />
          </div>
          <div className={"flex justify-between items-center py-[10px]"}>
            <label htmlFor={"includeNumbers"}>Include Numbers</label>
            <input
              type={"checkbox"}
              value={"number"}
              id={"includeNumbers"}
              checked={includeNumbers}
              onChange={handleChangeInput}
            />
          </div>
          <div className={"flex justify-between items-center py-[10px]"}>
            <label htmlFor={"includeSymbols"}>Include Symbols</label>
            <input
              type={"checkbox"}
              value={"symbols"}
              id={"includeSymbols"}
              checked={includeSymbols}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <button
          className={"w-full bg-sky-600 py-[10px] mt-4 rounded font-semibold"}
          onClick={generatePassword}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
