import React from "react";
import styled from "styled-components";
import wavey from "./../media/wavey.gif";
import profilepic from "./../media/profilepic.jpg";
import "aos/dist/aos.css";

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
    height: 240px;
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
    width: 155px;
    margin: 10px;
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
    font-size: 35px;
    width: 344px;
  }
  @media (max-width: 620px) {
    font-size: 28px;
    width: 280px;
  }
  @media (max-width: 530px) {
    font-size: 23px;
    width: 170px;
  }
`;

const PinkText = styled.div`
  color: #e289ff;
  margin-left: 9px;
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
  left: 31em;
  top: 10px;
  border: 0px;
  cursor: alias;
  box-shadow: 0 0 5px #03e9f4, 0 0 5px #03e9f4, 0 0 20px #03e9f4,
    0 0 120px #03e9f4;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  @media (max-width: 1365px) {
    left: 0em;
  }
  &:hover {
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
  @media (max-width: 620px) {
    font-size: 15px;
    height: 20px;
    width: 80px;
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
    margin: 0px 0px 0px 20px;
  }
`;

export default function Hero() {
  return (
    <PageContainer id="about">
      <LeftInnerDiv>
        <div data-aos="flip-left">
          <Picture src={profilepic} />
        </div>
      </LeftInnerDiv>
      <RightInnerDiv>
        <div data-aos="fade-left">
          <Greeting> Hello!</Greeting>
          <Text>
            I‘m <PinkText> Sylvia Makuch,</PinkText> a Front End Developer based
            in Canada 🍁.
            <a href="https://drive.google.com/file/d/1ADXRObZNdobSKkRIazMPufnTp1JQsed0/view?usp=sharing">
              {" "}
              <ResumeButton> Resume </ResumeButton>{" "}
            </a>
          </Text>
        </div>
      </RightInnerDiv>
    </PageContainer>
  );
}