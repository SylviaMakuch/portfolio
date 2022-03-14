import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.js";
import Skills from "./Skills.js";
import Projects from "./Projects/Projects.js";
import Services from "./Services/Services.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";

const MainContainer = styled.div``;

export default function MainPage() {
  return (
    <MainContainer>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Footer />
    </MainContainer>
  );
}
