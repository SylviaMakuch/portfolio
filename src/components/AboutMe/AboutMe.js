import React from "react";
import styled from "styled-components";
import Principles from "./Principles";
import AOS from "aos";
import "aos/dist/aos.css";

const PageContainer = styled.div`
  padding: 50px;
`;

const Title = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  color: white;
  text-align: center;
  text-shadow: 2px 2px black;
  font-size: 65px;
  letter-spacing: 0.8px; */
  margin: 500px 100px 500px 100px;

  @media( max-width: 800px){
    font-size: 45px;
  }
`;

const InnerBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const InnerTopDiv = styled.div`
  display: flex;
  align-content: ;
  align-items: center;
  flex-direction: column;
  justify-content: center; 
`;


export default function AboutMe() {
  AOS.init({
    duration: 1200,
  });
  return (

    <PageContainer>
      <InnerTopDiv>
        <Title>A little About Me</Title>
      </InnerTopDiv>
      <div data-aos="zoom-in">
        <InnerBottomDiv>
          <Principles />
        </InnerBottomDiv>
      </div>
    </PageContainer>
  );
}
