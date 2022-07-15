import React, { useRef, useState } from "react";

function VerifyAccountUi() {
  const ref = useRef(null);
  const [pass, setPass] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  const { one, two, three, four, five, six } = pass;
  const handleSetPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass({
      ...pass,
      [event.target.name]: (event.nativeEvent as InputEvent).data,
    });
    const form = event.target.form as HTMLFormElement;
    const index = Array.from(form).indexOf(event.target);

    if (index < 5) {
      (form.elements[index + 1] as HTMLInputElement).focus();
    }
  };
  return (
    <div
      className={
        "bg-white h-screen w-screen pt-[66px] flex items-center justify-center overflow-hidden"
      }
    >
      <div
        className={
          "bg-slate-100 rounded-[10px] border-black border-[3px] p-[30px] max-w-[1000px] text-center"
        }
      >
        <div className={"text-3xl font-semibold py-3"}>Verify Your Account</div>
        <p>
          We emailed you the six digit code to cool_guy@email.com Enter the code
          below to confirm your email address.
        </p>
        <form
          ref={ref}
          className={
            "flex items-center justify-center my-[40px] flex-wrap sm:flex-nowrap"
          }
        >
          <input
            className={
              "rounded w-[100px] border border-gray-400 m-1 text-center font-semibold text-[60px] h-[80px] valid:border-sky-600"
            }
            type={"number"}
            placeholder={"0"}
            min={0}
            max={9}
            name={"one"}
            value={one}
            onChange={handleSetPass}
            required={true}
          />
          <input
            className={
              "rounded w-[100px] border border-gray-400 m-1 text-center font-semibold text-[60px] h-[80px] valid:border-sky-600"
            }
            type={"number"}
            placeholder={"0"}
            min={0}
            max={9}
            name={"two"}
            value={two}
            onChange={handleSetPass}
            required={true}
          />
          <input
            className={
              "rounded w-[100px] border border-gray-400 m-1 text-center font-semibold text-[60px] h-[80px] valid:border-sky-600"
            }
            type={"number"}
            placeholder={"0"}
            min={0}
            max={9}
            name={"three"}
            value={three}
            onChange={handleSetPass}
            required={true}
          />
          <input
            className={
              "rounded w-[100px] border border-gray-400 m-1 text-center font-semibold text-[60px] h-[80px] valid:border-sky-600"
            }
            type={"number"}
            placeholder={"0"}
            min={0}
            max={9}
            name={"four"}
            value={four}
            onChange={handleSetPass}
            required={true}
          />
          <input
            className={
              "rounded w-[100px] border border-gray-400 m-1 text-center font-semibold text-[60px] h-[80px] valid:border-sky-600"
            }
            type={"number"}
            placeholder={"0"}
            min={0}
            max={9}
            name={"five"}
            value={five}
            onChange={handleSetPass}
            required={true}
          />
          <input
            className={
              "rounded w-[100px] border border-gray-400 m-1 text-center font-semibold text-[60px] h-[80px] valid:border-sky-600"
            }
            type={"number"}
            placeholder={"0"}
            min={0}
            max={9}
            name={"six"}
            value={six}
            onChange={handleSetPass}
            required={true}
          />
        </form>
        <div
          className={
            "bg-gray-200 text-sm inline-block p-[10px] leading-[20px] max-w-[400px] rounded"
          }
        >
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </div>
      </div>
    </div>
  );
}

export default VerifyAccountUi;
