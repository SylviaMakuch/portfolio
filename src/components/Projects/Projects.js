import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { cardData } from "./Config";
import workhard from "./../../media/workhard.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const PageContainer = styled.div`
  display: flex;
  margin: 0px 0px 100px 0px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-attachment: fixed;
  background: rgb(139, 70, 230);
  background: radial-gradient(
    circle,
    rgba(139, 70, 230, 1) 0%,
    rgba(0, 0, 0, 1) 78%
  );
`;

const InnerBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 2200px;
`;

const Title = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  color: white;
  text-align: center;
  text-shadow: 2px 2px black;
  font-size: 65px;
  letter-spacing: 0.8px; */
`;

const Picture = styled.img`
  width: 550px;
@media(max-width: 780px){
  width: 80%;
}
`;

const InnerTopDiv = styled.div`
  display: flex;
  align-content: ;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0px 80px 0px;
`;

export default function Projects() {
  AOS.init({
    duration: 1200,
  });
  return (
    <PageContainer id="projects">
          <div data-aos="fade-up">
      <InnerTopDiv>
        <Picture src={workhard} />
        <Title> My Latest Projects </Title>
      </InnerTopDiv>
      <InnerBottomDiv>
        {cardData.map(({ title, text, image, url }, index) => {
          return <Cards url={url} image={image} text={text} title={title} key={index} />;
        })}
      </InnerBottomDiv>
      </div>
    </PageContainer>
  );
}