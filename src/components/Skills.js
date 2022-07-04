import React from "react";
import styled from "styled-components";
import bootstrap from "./../media/bootstrap.svg";
import css from "./../media/css.svg";
import figma from "./../media/figma.svg";
import github from "./../media/github.svg";
import html from "./../media/html.svg";
import js from "./../media/js.svg";
import mongodb from "./../media/mongodb.svg";
import react from "./../media/react.svg";
import ts from "./../media/ts.svg";
import threejslogo from "./../media/threejslogo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background: linear-gradient(89deg, #cd87ee, #87e0ee);
  background-size: 400% 400%;
  padding:  40px 0px;
  -webkit-animation: AnimationName 0s ease infinite;
  -moz-animation: AnimationName 0s ease infinite;
  animation: AnimationName 0s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 51% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 51% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 51% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  @media (max-width: 780px) {
    max-width: 63%;
  }
  @media (max-width: 680px) {
    max-width: 70%;
  }
`;

const Icon = styled.img`
  width: 100px;
  margin: 30px;
  @media (max-width: 1700px) {
    width: 80px;
  }
  @media (max-width: 1200px) {
    width: 60px;
    margin: 20px;
  }
  @media (max-width: 900px) {
    width: 50px;
  }
  @media (max-width: 680px) {
    margin: 10px;
    width: 30px;
  }
`;

export default function Skills() {
  AOS.init({
    duration: 1200,
  });
  return (
    <PageContainer>
      <InnerDiv>
        <div data-aos="zoom-in">
          <Icon src={bootstrap} id="skills" />
          <Icon src={css} />
          <Icon src={figma} />
          <Icon src={github} />
          <Icon src={html} />
          <Icon src={mongodb} />
          <Icon src={react} />
          <Icon src={ts} />
          <Icon src={js} />
          <Icon src={threejslogo} />
        </div>
      </InnerDiv>
    </PageContainer>
  );
}
