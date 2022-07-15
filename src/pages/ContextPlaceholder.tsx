import React, { useEffect, useState } from "react";
import { classNames } from "../utils/ClassNames";
import { useTitle } from "../hooks/useTitle";

function ContextPlaceholder() {
  useTitle("Context Placeholder");
  const [data, setData] = useState({
    loading: true,
    img: "",
    title: "",
    content: "",
    avatar: "",
    name: "",
    date: "",
  });
  const { loading, img, title, content, avatar, name, date } = data;

  useEffect(() => {
    const getData = setTimeout(() => {
      setData({
        loading: false,
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        title: "Lorem ipsum dolor sit amet",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "John Doe",
        date: "Oct 08, 2021",
      });
    }, 2500);
    return () => clearTimeout(getData);
  }, []);
  return (
    <div
      className={
        "bg-slate-300 flex items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <div className={"shadow-md rounded-lg w-[350px] overflow-hidden"}>
        <div
          className={classNames(
            "h-[200px]",
            loading ? "bg-[length:200%_100%] bg-animate-bg animate-bgPos" : ""
          )}
        >
          {img ? (
            <img
              className={"object-cover h-full w-full"}
              src={img}
              alt="header"
            />
          ) : (
            ""
          )}
        </div>
        <div className={"bg-white p-[30px]"}>
          <h3
            className={classNames(
              "font-bold text-[20px]",
              loading
                ? "bg-[length:200%_100%] bg-animate-bg animate-bgPos rounded-[50px] inline-block m-0 h-[10px] w-full"
                : ""
            )}
          >
            {title}
          </h3>
          <p className={"text-gray-600 mt-3 mb-6"}>
            {content ? (
              content
            ) : (
              <>
                <span
                  className={
                    "bg-[length:200%_100%] bg-animate-bg animate-bgPos rounded-[50px] inline-block m-0 h-[10px] w-full"
                  }
                />
                <span
                  className={
                    "bg-[length:200%_100%] bg-animate-bg animate-bgPos rounded-[50px] inline-block m-0 h-[10px] w-full"
                  }
                />
                <span
                  className={
                    "bg-[length:200%_100%] bg-animate-bg animate-bgPos rounded-[50px] inline-block m-0 h-[10px] w-full"
                  }
                />
              </>
            )}
          </p>
          <div className={"flex"}>
            <div
              className={classNames(
                "rounded-full overflow-hidden h-[40px] w-[40px]",
                loading
                  ? "bg-[length:200%_100%] bg-animate-bg animate-bgPos"
                  : ""
              )}
            >
              {avatar ? <img src={avatar} alt={"avatar"} /> : ""}
            </div>
            <div className={"flex flex-col justify-around ml-[10px] w-[100px]"}>
              <div
                className={classNames(
                  "font-bold",
                  loading
                    ? "bg-[length:200%_100%] bg-animate-bg animate-bgPos rounded-[50px] inline-block m-0 h-[10px] w-full"
                    : ""
                )}
              >
                {name}
              </div>
              <div
                className={classNames(
                  "text-gray-400 italic text-[13px]",
                  loading
                    ? "bg-[length:200%_100%] bg-animate-bg animate-bgPos rounded-[50px] inline-block m-0 h-[10px] w-full"
                    : ""
                )}
              >
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContextPlaceholder;
