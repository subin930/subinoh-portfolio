import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./features/Main";
import AIF from "./features/AIF";
import OMOK from "./features/OMOK";
import Guardians from "./features/Guardians";
import SOLCATION from "./features/SOLCATION";
import ProjectHeader from "./components/ProjectHeader";

const ProjectLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <ProjectHeader />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-dp">
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/project/AIF"
              element={
                <ProjectLayout>
                  <AIF />
                </ProjectLayout>
              }
            />
            <Route
              path="/project/OMOK"
              element={
                <ProjectLayout>
                  <OMOK />
                </ProjectLayout>
              }
            />
            <Route
              path="/project/Guardians"
              element={
                <ProjectLayout>
                  <Guardians />
                </ProjectLayout>
              }
            />
            <Route
              path="/project/SOLCATION"
              element={
                <ProjectLayout>
                  <SOLCATION />
                </ProjectLayout>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
