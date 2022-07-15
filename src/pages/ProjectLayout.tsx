import React from "react";
import Error from "./Error";

function ProjectLayout(props: {
  data: {
    name: string;
    href: string;
    image: string;
    status: boolean;
    element: JSX.Element;
  };
}) {
  if (!props.data.status) {
    return (
      <Error
        title={"Project is locked! "}
        content={"Please come back once it's opened!"}
      />
    );
  }
  return props.data.element;
}

export default ProjectLayout;
