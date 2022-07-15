import React, { useState } from "react";

function PasswordStrengthBackground() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const handleSetData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <div
        className={"bg-no-repeat bg-center bg-cover absolute w-full z-0"}
        style={{
          filter: `blur(${20 - password.length * 2}px)`,
          height: "calc(100% - 66px)",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b)",
        }}
      />
      <div className={"bg-white rounded p-10 text-center shadow-md z-10"}>
        <h1 className={"text-3xl"}>Image Password Strength</h1>
        <p className={"text-sm text-gray-600"}>
          Change the password to see the effect
        </p>
        <form onSubmit={handleSubmit}>
          <div className={"my-4 text-left"}>
            <label htmlFor={"email"} className={"text-gray-900"}>
              Email
            </label>
            <input
              type={"text"}
              className={"border block w-full p-2 mt-2 rounded"}
              id={"email"}
              name={"email"}
              placeholder={"Enter Email"}
              value={email}
              onChange={handleSetData}
            />
          </div>
          <div className={"my-4 text-left"}>
            <label htmlFor="password" className="text-gray-900">
              Password:
            </label>
            <input
              type={"password"}
              className={"border block w-full p-2 mt-2 rounded"}
              id={"password"}
              name={"password"}
              placeholder={"Enter Password"}
              value={password}
              onChange={handleSetData}
            />
          </div>
          <button
            className={
              "bg-black rounded text-white font-semibold py-2 mt-4 w-full inline-block"
            }
            type={"button"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordStrengthBackground;
