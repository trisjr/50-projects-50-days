import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const FormControl = (props: any) => {
  const [active, setActive] = useState(false);
  const handleBlur = () => {
    if (!props.value) {
      setActive(false);
    }
  };
  const handleFocus = () => {
    setActive(true);
  };

  return (
    <div className={"relative mt-[20px] mb-[40px] w-[300px]"}>
      <input
        className={classNames(
          "bg-transparent border-b-[2px] border-white border-solid block w-full py-[10px] text-[18px] text-white focus:outline-none",
          active || props.value ? "border-sky-500" : ""
        )}
        id={props.name}
        type={"text"}
        placeholder={""}
        required={true}
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <label
        className={"absolute top-[15px] left-0 cursor-text"}
        htmlFor={props.name}
      >
        {props.name.split("").map((item: string, index: number) => (
          <span
            key={index}
            className={classNames(
              "inline-block text-[18px] transition-all duration-200 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)]",
              active || props.value ? "text-sky-500 -translate-y-[30px]" : ""
            )}
            style={{ transitionDelay: `${(index + 1) * 50}ms` }}
          >
            {item}
          </span>
        ))}
      </label>
    </div>
  );
};

function FormWave() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSetEmail = (value: string) => {
    setEmail(value);
  };
  const handleSetPassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={
        "bg-sky-700 text-white flex flex-col items-center justify-center h-screen overflow-hidden m-0 pt-[66px]"
      }
    >
      <div className={"bg-sky-900 px-[40px] py-[20px] rounded"}>
        <h1 className={"font-bold text-3xl text-center mb-[30px]"}>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormControl
            value={email}
            type={"text"}
            name={"Email"}
            setValue={(value: string) => handleSetEmail(value)}
          />
          <FormControl
            value={password}
            type={"password"}
            name={"Password"}
            setValue={(value: string) => handleSetPassword(value)}
          />
          <button
            className={
              "w-full bg-sky-200 inline-block p-[15px] text-2xl rounded font-bold text-sky-900"
            }
            type={"submit"}
          >
            Login
          </button>
          <p className={"mt-[30px]"}>
            Don't have an account?{" "}
            <Link className={"text-sky-400"} to={"#"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default FormWave;
