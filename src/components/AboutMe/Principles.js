import React from "react";
import styled from "styled-components";
import aboutme from "./../../media/aboutme.svg";

const Card = styled.div`
  padding: 0px 50px 50px 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  
  @media( max-width: 650px){
    max-width: 400px;
  }
`;

const ImageFile = styled.img`
    width: 500px;
    @media( max-width: 650px){
        width: 400px;
  }
`;

const MainText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    color: white;
    letter-spacing: 0.2px; 

    @media( max-width: 650px){
       font-size: 16px;
  }
`;

const SecondaryText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    color: #f991f9;

    @media( max-width: 650px){
       font-size: 16px;
  }
`;

export default function Principles() {
    return (
        <Card>
            <ImageFile src={aboutme} />
            <MainText>
                Hello! My name is Sylvia and I enjoy creating beautiful yet functional things on the internet. My interest in web development started back in 2014 when I enrolled in Biotechnology. I went down the wrong path and ended up working for the hospital. After years, I knew this was not the path for me. I started to refresh my skills, took a Bootcamp and attended Harvard’s Introduction to Computer Science course and did an internship at a crypto start-up.
            </MainText>

            <MainText>
                Since then, I have had the opportunity to be at the forefront of innovation in crypto companies. With my passion for art and creative design, I aid companies in design and brand building, this includes custom three-js models and vector animations.
            </MainText>
            <SecondaryText>
                I am passionate about front-end development using: JavaScript, React , Redux, TypeScript, three-js / React-Three-Fibre, CSS, and Styled-Components.
            </SecondaryText>
            <SecondaryText>
                I am seeking  a exciting oppertunity to work on exciting tech and make friends in the meantime!
            </SecondaryText>

        </Card>
    );
}