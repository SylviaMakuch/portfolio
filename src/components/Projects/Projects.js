import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { cardData } from "./Config";
import workhard from "./../../media/workhard.gif";
import artpark from "./../../media/artpark.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
`;

const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  color: white;
  text-align: center;
  text-shadow: 2px 2px black;
  font-size: 65px;
  letter-spacing: 0.8px; 
  margin: 50px 10px 50px 10px;

  @media( max-width: 800px){
    font-size: 45px;
    max-width: 400px;
  }
`;

const Picture = styled.img`
  width: 600px;
@media(max-width: 1180px){
  width: 60%;
}
`;

const InnerTopDiv = styled.div`
  display: flex;
  align-content: ;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0px 80px 0px;
`;

const InnerBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export default function Projects() {
  AOS.init({
    duration: 1200,
  });
  return (
    <PageContainer id="projects">
      <Title ata-aos="zoom-out"> My Latest Projects </Title>
      <div data-aos="fade-up">
        <InnerTopDiv>
          <Picture src={artpark} />
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
