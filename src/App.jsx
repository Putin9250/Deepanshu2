import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects" >
        <Projects />
      </section>
      <section id="skills" style={{ minHeight: "100vh" }}>
        <Skills />
      </section>
      <section id="contact" style={{ minHeight: "100vh" }}>
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default App;
