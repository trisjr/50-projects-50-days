import React, { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";

function BlurryLoading() {
  useTitle("Blurry Loading");
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(blur + 1);
    }, 20);
    if (blur === 100) clearInterval(interval);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={
        "flex items-center justify-center h-screen overflow-hidden m-0 pt-[66px]"
      }
    >
      <div
        className={"-z-10 absolute -top-[30px] -left-[30px]"}
        style={{
          background:
            "url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80') no-repeat center center/cover",
          filter: `blur(${(100 - blur) / 4}px)`,
          width: "calc(100vw + 30px)",
          height: "calc(100vh + 30px)",
        }}
      ></div>
      <div
        className={"text-white text-3xl"}
        style={{ opacity: (100 - blur) / 100 }}
      >
        {blur + " %"}
      </div>
    </div>
  );
}

export default BlurryLoading;
