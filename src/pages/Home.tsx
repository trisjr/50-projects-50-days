import React from "react";

function Home() {
  return (
    <section
      className={
        "text-white h-screen pt-[80px] relative bg-no-repeat bg-center bg-[url('https://50projects50days.com/img/showcase-bg.png')] after:content-[' '] after:absolute after:top-0 after:-z-30 after:left-0 after:w-full after:h-full -z-[1] after:bg-[#170728]/90"
      }
    >
      <div
        className={
          "flex flex-col items-center justify-center text-center h-full z-40 max-w-[1200px] px-[40px] mx-auto overflow-auto"
        }
      >
        <h2 className={"text-purple-800 text-3xl font-bold mb-5"}>
          50 Projects in 50 Days
        </h2>
        <h1 className={"text-4xl font-bold tracking-widest leading-relaxed"}>
          50 unique mini-projects to sharpen your HTML, CSS & JavaScript skills
        </h1>
      </div>
    </section>
  );
}

export default Home;
