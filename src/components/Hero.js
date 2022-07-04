import React from "react";
import styled from "styled-components";
import wavey from "./../media/wavey.gif";
import profilepic from "./../media/profilepic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import SocialTab from "./Socials.js";

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(${wavey});
  background-position: 50% 85%;
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 1460px) {
    justify-content: flex-start;
  }
  @media (max-width: 620px) {
    height: 70vh;
  }
`;

const Picture = styled.img`
  height: 450px;
  width: 450px;
  border-radius: 250px 250px 30px 30px;
  box-shadow: -20px 20px 20px 0px #c985f27a;
  margin-bottom: 60px;
  @media (max-width: 1520px) {
    height: 300px;
    width: 300px;
    margin: 60px;
  }
  @media (max-width: 1340px) {
    height: 280px;
    width: 240px;
    margin: 60px;
    position: relative;
  }
  @media (max-width: 830px) {
    height: 220px;
    width: 200px;
    margin: 30px;
  }
  @media (max-width: 738px) {
    height: 210px;
    width: 175px;
    margin: 10px;
  }
  @media (max-width: 620px) {
    height: 190px;
    width: 140px;
    margin: 0px;
  }

`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 625px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  color: #ffffff;
  flex-wrap: wrap;
  position: relative;
  line-height: 1.6;
  @media (max-width: 1450px) {
    font-size: 40px;
    width: 500px;
  }
  @media (max-width: 1140px) {
    width: 425px;
  }
  @media (max-width: 865px) {
    font-size: 33px;
    width: 344px;
  }
  @media (max-width: 620px) {
    font-size: 28px;
    width: 280px;
  }
  @media (max-width: 530px) {
    font-size: 20px;
    width: 170px;
  }
`;

const PinkText = styled.div`
  color: #e289ff;
  margin-left: 5px;
`;

const Greeting = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  color: #ffffff;
  position: relative;
  @media (max-width: 740px) {
    font-size: 35px;
  }
  @media (max-width: 620px) {
    font-size: 25px;
  }
`;

const ResumeButton = styled.button`
  font-family: monospace;
  font-size: large;
  height: 40px;
  width: 120px;
  border-radius: 30px;
  background: #03e9f4;
  color: #050801;
  position: relative;
  left: 400px;
  top: 10px;
  border: 0px;
  cursor: alias;
  box-shadow: 0 0 5px #03e9f4, 0 0 5px #03e9f4, 0 0 20px #03e9f4,
    0 0 120px #03e9f4;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

  &:hover {
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }

  @media (max-width: 1000px) {
    font-size: 15px;
    left: 250px;
    top: 50px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    left: 30px;
    top: 16px;
    height: 35px;
  }
`;

const LeftInnerDiv = styled.div`
  display: flex;
  align-content: ;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 100px;
  @media (max-width: 1340px) {
    margin: 50px;
  }
  @media (max-width: 1140px) {
    margin: 40px;
  }
  @media (max-width: 400px) {
    margin: 20px;
  }
`;

const RightInnerDiv = styled.div`
  display: flex;
  align-content: ;
  align-content: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 90px;
  @media (max-width: 1340px) {
    margin: 50px;
  }
  @media (max-width: 1140px) {
    margin: 0px;
  }
  @media (max-width: 738px) {
    margin: 0px 0px 0px 0px;
  }
  @media (max-width: 630px) {
    width: 160px;
  }
`;

export default function Hero() {
  AOS.init({
    duration: 800,
  });
  return (
    <PageContainer id="about">
      <LeftInnerDiv>
        <div data-aos="flip-left">
          <Picture src={profilepic} />
        </div>
        <SocialTab />
      </LeftInnerDiv>
      <RightInnerDiv>
        <div data-aos="fade-left">
          <Greeting> Hello!</Greeting>
          <Text>
            I‘m <PinkText> Sylvia Makuch,</PinkText> a Front End Developer based
            in Canada 🍁.
            <Link to="/resume">
              <ResumeButton> Resume </ResumeButton>
            </Link>
          </Text>
        </div>
      </RightInnerDiv>
    </PageContainer>
  );
}
