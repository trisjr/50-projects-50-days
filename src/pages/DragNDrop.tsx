import React, { ReactNode, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { classNames } from "../utils/ClassNames";

const Image = () => {
  return (
    <div
      className={
        "h-full w-full cursor-pointer bg-[url('https://images.unsplash.com/photo-1657226991576-8b2c50d5e024?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQ0NTYwMA&ixlib=rb-1.2.1&q=80&w=150')]"
      }
      draggable={true}
    />
  );
};

const Frame = (props: {
  value: number;
  action: (value: number) => void;
  children: ReactNode;
}) => {
  const [blur, setBlur] = useState(false);
  return (
    <div
      className={classNames(
        "h-[150px] w-[150px] m-[10px] border-4 bg-white",
        blur
          ? "border-white bg-blue-200 border-dashed"
          : "border-solid border-black "
      )}
      onDragEnter={(e) => {
        e.preventDefault();
        setBlur(true);
      }}
      onDragLeave={() => {
        setBlur(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={() => {
        props.action(props.value);
        setBlur(false);
      }}
    >
      {props.children}
    </div>
  );
};

function DragNDrop() {
  useTitle("Drag N Drop");
  const frames = [1, 2, 3, 4, 5];
  const [image, setImage] = useState(1);
  const handleSetImage = (value: number) => {
    setImage(value);
  };
  return (
    <div
      className={
        "bg-sky-600 flex items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      {frames.map((item) => (
        <div key={item}>
          <Frame value={item} action={handleSetImage}>
            {image === item ? <Image /> : <></>}
          </Frame>
        </div>
      ))}
    </div>
  );
}

export default DragNDrop;
