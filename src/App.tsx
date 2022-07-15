import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectList from "./pages/ProjectList";
import { ProjectContext } from "./context/ProjectContext";
import ProjectLayout from "./pages/ProjectLayout";

function App() {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"/project"} element={<Project />}>
              <Route index element={<ProjectList />} />
              {projects.map((item, index) => (
                <Route
                  key={index}
                  path={item.href}
                  element={<ProjectLayout data={item} />}
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
