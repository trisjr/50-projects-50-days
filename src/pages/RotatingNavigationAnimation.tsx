import React, { useState } from "react";

import { FaTimes, FaBars, FaHome, FaUser, FaEnvelope } from "react-icons/fa";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

function RotatingNavigationAnimation() {
  const [show, setShow] = useState(false);
  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <div className={"bg-gray-700 overflow-hidden m-0 pt-[66px]"}>
      <div
        className={classNames(
          "bg-white origin-top-left transition-transform duration-500 ease-linear w-full min-h-full p-[50px]",
          show ? "-rotate-[20deg]" : ""
        )}
      >
        <div className={"fixed -translate-y-3/4 -translate-x-3/4"}>
          <div
            className={classNames(
              "bg-orange-600 h-[200px] w-[200px] rounded-full relative transition-transform duration-500 ease-linear",
              show ? "-rotate-[70deg]" : ""
            )}
          >
            <button
              type={"button"}
              className={
                "cursor-pointer absolute left-1/2 h-[100px] bg-transparent text-white rotate-90 origin-top-left top-[60%]"
              }
              onClick={handleSetShow}
            >
              <i className={"text-3xl"}>
                <FaTimes />
              </i>
            </button>
            <button
              type={"button"}
              className={
                "cursor-pointer absolute left-1/2 h-[100px] bg-transparent text-white top-[50%] left-[60%]"
              }
              onClick={handleSetShow}
            >
              <i className={"text-3xl"}>
                <FaBars />
              </i>
            </button>
          </div>
        </div>
        <div className={"max-w-[1000px] my-[50px] mx-auto"}>
          <h1 className={"m-0 font-bold text-3xl"}>Amazing Article</h1>
          <small className={"text-gray-600 italic"}>Florin Pop</small>
          <p className={"text-gray-700 leading-normal"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>
          <h3 className={"font-bold text-2xl py-5"}>My Dog</h3>
          <img
            className={"max-w-full"}
            src={
              "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            }
            alt={"dog"}
          />
          <p className={"text-gray-700 leading-normal mt-3"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>
      <nav className={"fixed bottom-[40px] left-0 z-50"}>
        <ul className={"pl-[30px]"}>
          <li
            className={classNames(
              "cursor-pointer flex text-[18px] items-center uppercase text-white mx-0 my-[40px] transition-transform duration-500 ease-in",
              show ? "delay-[300ms]" : ""
            )}
            style={{ transform: `translateX(${show ? 0 : -100}%)` }}
          >
            <i className={"mr-3"}>
              <FaHome />
            </i>{" "}
            Home
          </li>
          <li
            className={classNames(
              "cursor-pointer flex text-[18px] items-center uppercase text-white mx-0 my-[40px] transition-transform duration-500 ease-in ml-[15px] ",
              show ? "delay-[300ms]" : ""
            )}
            style={{ transform: `translateX(${show ? 0 : -150}%)` }}
          >
            <i className={"mr-3"}>
              <FaUser />
            </i>{" "}
            About
          </li>
          <li
            className={classNames(
              "cursor-pointer flex text-[18px] items-center uppercase text-white mx-0 my-[40px] transition-transform duration-500 ease-in ml-[30px] ",
              show ? "delay-[300ms]" : ""
            )}
            style={{ transform: `translateX(${show ? 0 : -200}%)` }}
          >
            <i className={"mr-3"}>
              <FaEnvelope />
            </i>{" "}
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default RotatingNavigationAnimation;
