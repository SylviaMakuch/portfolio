import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.js";
import Skills from "./Skills.js";
import Projects from "./Projects/Projects.js";
import Hero from "./Hero.js";
import AboutMe from "./AboutMe/AboutMe"
import ContactForm from "./ContactForm.js";

const GradientMapBackground = styled.div`
  background-color: #000000;
  background-image: 
  radial-gradient(at 33% 27%,hsl(290deg 69% 28% / 62%) 0,transparent 60%), 
  radial-gradient(at 74% 70%,hsl(260deg 55% 36%) 0,transparent 80%);
`;


export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <GradientMapBackground>
        <AboutMe />
        <Projects />
      </GradientMapBackground>
      <ContactForm />
    </>
  );
}
