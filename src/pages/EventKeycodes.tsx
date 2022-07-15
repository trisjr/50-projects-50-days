import React, { useState } from "react";

function EventKeycodes() {
  const [value, setValue] = useState({ key: "", code: "" });

  const keyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setValue({ key: e.key, code: e.code });
  };
  return (
    <div
      onKeyDown={keyDownHandle}
      tabIndex={0}
      className={
        "bg-gray-400 flex items-center justify-center text-center h-screen pt-[66px] overflow-hidden"
      }
    >
      {!value.key ? (
        <div className={"text-3xl font-bold"}>
          Press any key to get the keyCode
        </div>
      ) : (
        <div>
          <div
            className={
              "bg-white border inline-flex items-center text-2xl font-bold p-[20px] flex-col m-[10px] min-w-[150px] relative"
            }
          >
            {value.key}
            <small
              className={
                "text-white absolute -top-[28px] left-0 text-center w-full text-[14px] font-normal"
              }
            >
              event.key
            </small>
          </div>
          <div
            className={
              "bg-white border inline-flex items-center text-2xl font-bold p-[20px] flex-col m-[10px] min-w-[150px] relative"
            }
          >
            {value.code}
            <small
              className={
                "text-white absolute -top-[28px] left-0 text-center w-full text-[14px] font-normal"
              }
            >
              event.code
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventKeycodes;
