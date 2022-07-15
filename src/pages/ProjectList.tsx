import React, { useContext } from "react";
import ProjectItems from "../components/ProjectItems";
import { ProjectContext } from "../context/ProjectContext";
import { useTitle } from "../hooks/useTitle";

function ProjectList() {
  useTitle("Projects");
  const { projects } = useContext(ProjectContext);
  return (
    <section className={"overflow-hidden pt-[80px]"}>
      <div className={"container px-5 py-2 mx-auto lg:pt-12 lg:px-32"}>
        <div className={"flex flex-wrap -m-1 md:-m-2"}>
          {projects.map((item, index) => (
            <div key={index} className={"flex flex-wrap w-1/3 lg:w-1/4"}>
              <ProjectItems
                name={item.name}
                href={item.href}
                image={item.image}
                status={item.status}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
