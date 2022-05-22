import React from "react";
import { CardContent } from "@material-ui/core/";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  background-color: #ac63ac;
  border-radius: 30px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 45px;
  padding: 10px;
  @media (max-width: 1335px) {
    margin: 25px;
  }
  @media (max-width: 1215px) {
    margin: 10px;
  }
  @media (max-width: 1160px) {
    padding: 5px;
  }
  @media (max-width: 1090px) {
    width: 270px;
  }
  @media (max-width: 946px) {
    width: 225px;
  }
  @media (max-width: 790px) {
    width: 170px;
  }
  @media (max-width: 620px) {
    width: 150px;
  }
  @media (max-width: 560px) {
    width: 65%;
  }
`;

const Image = styled.img`
  width: 180px;
  @media (max-width: 790px) {
    width: 162px;
  }
  @media (max-width: 660px) {
    width: 50%;
  }
`;

const Message = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 100;
  color: white;
  font-size: 19px;
  height: 140px;
  background-color: rgb(189 16 224 / 20%);
  text-align: center;
  display: flex;
  align-items: center;
  padding: 5%;
  @media (max-width: 946px) {
    height: 145px;
    font-size: 12px;
  }
  @media (max-width: 720px) {
    font-size: 11px;
    height: 100px;
  }
`;

const Title = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  color: #ff8383;
  text-align: center;
  font-size: 28px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  @media (max-width: 946px) {
    font-size: 23px;
  }
  @media (max-width: 790px) {
    margin: 2px;
  }
  @media (max-width: 620px) {
    font-size: 18px;
  }
`;

export default function Cards({ image, text, title }, index) {
  return (
    <Card>
      <Image src={image} key={index} />
      <Title>{title}</Title>
      <CardContent>
        <Message>{text}</Message>
      </CardContent>
    </Card>
  );
}
