import React from "react";
import About from "./components/About";
import Contact from "./components/contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/project";
import Skills from "./components/skills";
import Stats from "./components/Summary";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Stats />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
