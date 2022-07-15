import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../utils/ClassNames";

function StickyNavbar() {
  const ref = useRef(null);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = (
        ref.current as unknown as HTMLElement
      ).getBoundingClientRect();
      if (window.scrollY > element.height + 150) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, []);

  return (
    <div className={"text-gray-800 pt-[116px] pb-[50px]"}>
      <nav
        ref={ref}
        className={classNames(
          "transition-all fixed z-20 top-[66px] left-0 right-0 duration-300 ease-in-out",
          navActive
            ? "shadow-md bg-white text-gray-800"
            : "bg-gray-800 text-white"
        )}
      >
        <div
          className={classNames(
            "max-w-[1200px] flex justify-between items-center py-[20px] mx-auto transition-all duration-300 ease-in-out",
            navActive ? "py-[10px]" : ""
          )}
        >
          <h1 className={"font-bold text-2xl"}>
            <Link className={"py-[7px] px-[15px]"} to={"#"}>
              My Website
            </Link>
          </h1>
          <ul className={"flex items-center justify-center"}>
            <li>
              <Link
                className={
                  "text-red-600 font-bold  py-[7px] px-[15px] hover:transition-all hover:duration-300 hover:ease-in-out text-[18px]"
                }
                to={"#"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  "text-[18px] py-[7px] px-[15px] hover:transition-all hover:duration-300 hover:ease-in-out hover:text-red-600"
                }
                to={"#"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={
                  "text-[18px] py-[7px] px-[15px] hover:transition-all hover:duration-300 hover:ease-in-out hover:text-red-600"
                }
                to={"#"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={
                  "text-[18px] py-[7px] px-[15px] hover:transition-all hover:duration-300 hover:ease-in-out hover:text-red-600"
                }
                to={"#"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={
          "bg-no-repeat bg-cover bg-bottom text-white flex justify-center items-center text-center relative mb-[20px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-gray-900 before:bg-opacity-40"
        }
        style={{
          height: "calc(100vh - 116px)",
          backgroundImage:
            "url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        <div className={"max-w-[1200px] mx-auto z-10"}>
          <h1 className={"text-5xl font-bold text-white -pt-[20px] pb-[20px]"}>
            Welcome To My Website
          </h1>
          <p className={"text-2xl"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consequuntur?
          </p>
        </div>
      </div>
      <div className={"max-w-[1200px] mx-auto"}>
        <h2 className={"font-bold text-2xl my-[20px]"}>Content One</h2>
        <p className={"text-gray-600 leading-[30px] tracking-[1.2px]"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
          quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
          officia aperiam corporis similique. Facilis quos tempore labore totam!
          Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
          modi dolorem sit architecto, voluptate magni sunt unde est quas?
          Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
          libero laboriosam ab eligendi omnis delectus earum labore, placeat
          officiis sint illum rem voluptas ipsum repellendus iste eius
          recusandae quae excepturi facere, iure rerum sequi? Illum velit
          delectus dicta et iste dolorum obcaecati minus odio eligendi!
        </p>
        <h2 className={"font-bold text-2xl my-[20px]"}>Content Two</h2>
        <p className={"text-gray-600 leading-[30px] tracking-[1.2px]"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
          quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
          officia aperiam corporis similique. Facilis quos tempore labore totam!
          Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
          modi dolorem sit architecto, voluptate magni sunt unde est quas?
          Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
          libero laboriosam ab eligendi omnis delectus earum labore, placeat
          officiis sint illum rem voluptas ipsum repellendus iste eius
          recusandae quae excepturi facere, iure rerum sequi? Illum velit
          delectus dicta et iste dolorum obcaecati minus odio eligendi!
        </p>
      </div>
    </div>
  );
}

export default StickyNavbar;
