import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetPathName } from "../hooks/GetPathName";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ProjectContext } from "../context/ProjectContext";

function Navbar() {
  const { projects } = useContext(ProjectContext);
  const pathName = GetPathName().split("/");

  const navigate = useNavigate();

  const findProject = (path: string) => {
    return projects.findIndex((item) => item.href === path);
  };

  const findData = () => {
    const index = findProject(pathName[2]);
    return {
      prev: projects[index - 1],
      current: projects[index],
      next: projects[index + 1],
    };
  };

  const handleClickPrev = () => {
    const prev = findData().prev;
    if (prev && prev.status) {
      navigate("project/" + prev.href);
    }
  };
  const handleClickNext = () => {
    const next = findData().next;
    if (next && next.status) {
      navigate("project/" + next.href);
    }
  };

  if (pathName[1] === "project" && pathName[2]) {
    return (
      <div
        className={
          "fixed top-0 left-0 w-full px-0 bg-purple-900 flex justify-between items-center py-2 z-40"
        }
      >
        <div
          className={
            "flex space-x-2 justify-centers inline-block items-center text-white px-2 hover:bg-white/10 cursor-pointer pl-3 pr-6  h-[50px] ease-linear duration-300"
          }
          title={findData().prev?.name}
          onClick={handleClickPrev}
        >
          <i>
            <FaCaretLeft />
          </i>
          Back
        </div>
        <div className={"text-white font-bold text-2xl flex items-center"}>
          <Link to={"/project"}>
            <i className={"text-4xl"}>
              <MdHome />
            </i>
          </Link>
          {" | " + findData().current?.name}
        </div>
        <div
          className={
            "flex space-x-2 justify-centers inline-block items-center text-white px-2 hover:bg-white/10 cursor-pointer pr-3 pl-6 h-[50px] ease-linear duration-300"
          }
          onClick={handleClickNext}
          title={findData().next?.name}
        >
          Next
          <i>
            <FaCaretRight />
          </i>
        </div>
      </div>
    );
  }
  return (
    <nav className={"fixed w-full py-2 px-0 bg-purple-900 z-50"}>
      <div
        className={
          "flex justify-between max-w-[1200px] px-[40px] items-center mx-auto"
        }
      >
        <img
          className={"h-[50px]"}
          src={"https://50projects50days.com/img/logo.png"}
          alt={"logo"}
        />
        <ul className={"flex items-center"}>
          <Link to={".."}>
            <li className={"px-6 py-1.5 text-[17px] text-white"}>Home</li>
          </Link>
          <Link to={"project"}>
            <li className={"px-6 py-1.5 text-[17px] text-white"}>Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
