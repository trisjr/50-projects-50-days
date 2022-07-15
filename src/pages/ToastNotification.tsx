import React, { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";

import { IoInformationOutline } from "react-icons/io5";
import { MdCheck, MdClose } from "react-icons/md";
import { TbExclamationMark } from "react-icons/tb";
import { BsQuestion } from "react-icons/bs";
import { classNames } from "../utils/ClassNames";

const Toast = ({
  type = "success",
  title = "Yay! Everything worked!",
  content = "Congrats on the internet loading your request.",
  action = () => {},
}: {
  type?: "success" | "warning" | "info" | "error";
  title?: string;
  content?: string;
  action?: () => void;
}) => {
  const icons = {
    info: <IoInformationOutline />,
    success: <MdCheck />,
    warning: <TbExclamationMark />,
    error: <BsQuestion />,
  };
  const colors = {
    info: "bg-sky-700",
    success: "bg-green-700",
    warning: "bg-yellow-600",
    error: "bg-red-700",
  };

  const [status, setStatus] = useState("show");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setStatus("hide");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClickClose = () => {
    setStatus("hide");
  };

  return (
    <div
      className={classNames(
        "relative cursor-pointer shadow-md bg-white rounded w-[500px] h-[100px] flex p-2 items-center m-2",
        status === "show"
          ? "animate-toastShow ease-in"
          : "ease-out animate-toastHide"
      )}
      onClick={handleClickClose}
    >
      <div
        className={classNames("h-full w-[6px] rounded-full", colors[type])}
      />
      <i
        className={classNames(
          "mx-4 h-[40px] w-[40px] flex justify-center items-center text-2xl rounded-full text-white",
          colors[type]
        )}
      >
        {icons[type]}
      </i>
      <div>
        <div className={"font-semibold text-[20px]"}>{title}</div>
        <div className={"text-gray-500"}>{content}</div>
      </div>
      <button
        type={"button"}
        className={"absolute right-[20px] text-2xl text-red-700"}
        onClick={handleClickClose}
      >
        <MdClose />
      </button>
    </div>
  );
};

const toastType = ["success", "info", "warning", "error"];

function ToastNotification() {
  useTitle("Toast Notification");
  const [list, setList] = useState<any[]>([]);

  const generateToast = () => {
    let toastProperties = null;
    let id = "_" + Math.random().toString(36).substring(2, 9);
    switch (toastType[Math.floor(Math.random() * toastType.length)]) {
      case "success": {
        toastProperties = {
          id,
          type: "success",
          title: "Success title",
          content: "Success content",
        };
        break;
      }
      case "info": {
        toastProperties = {
          id,
          type: "info",
          title: "Info title",
          content: "Info content",
        };
        break;
      }
      case "warning": {
        toastProperties = {
          id,
          type: "warning",
          title: "Warning title",
          content: "Warning content",
        };
        break;
      }
      case "error": {
        toastProperties = {
          id,
          type: "error",
          title: "Error title",
          content: "Error content",
        };
        break;
      }
      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  };
  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <button
        className={"px-4 py-2 rounded bg-blue-600 text-white active:scale-95"}
        type={"button"}
        onClick={generateToast}
      >
        Show Notification
      </button>
      <div
        className={
          "fixed bottom-[10px] right-[10px] flex flex-col items-end transition-all duration-300 ease-in-out"
        }
      >
        {list.map((toast, index) => (
          <Toast
            key={index}
            type={toast.type}
            title={toast.title}
            content={toast.content}
          />
        ))}
      </div>
    </div>
  );
}

export default ToastNotification;
