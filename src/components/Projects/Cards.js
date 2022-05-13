import React from "react";
import { CardContent } from "@material-ui/core/";
import styled from "styled-components";

const Card = styled.div`
  background-image: linear-gradient(to left, #000000e0, #ff000000, #000000e0);  
  width: 500px;
  border-radius: 30px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 45px;
  padding-bottom: 20px;
  @media (max-width: 1220px) {
    width: 40%;
    margin: 25px;
  }
  @media (max-width: 580px) {
    width: 80%;
    box-shadow: 0 0 0px #87e0ee38, 0 0 0px #87e0ee38, 0 0 0px #87e0ee38,
      0 0 20px #e289ff8f;
    background-image: linear-gradient(to left, #ff000000, #ffe2e23d, #ff000000);
  
  }
  &:hover {
    transform: translateX(3px);
    transform: translateY(-5px);
    box-shadow: 0 0 0px #87e0ee38, 0 0 0px #87e0ee38, 0 0 0px #87e0ee38,
      0 0 60px #e289ff8f;
    background-image: linear-gradient(to left, #ff000000, #ffe2e23d, #ff000000);
  }
`;

const ImageFile = styled.img`
  height: 260px;
  width: 500px;
  border-radius: 25px 25px 0px 0px;
  @media (max-width: 1220px) {
    width: 100%;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const Message = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  color: white;
  font-size: 20px;
  @media (max-width: 780px) {
  font-size: 15px;
  text-align: center;
  }
  @media (max-width: 580px) {
  font-size: 16px;
  }
`;

const Title = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  color: #ff8383;
  text-align: center;
  font-size: 25px;
  letter-spacing: 0.8px;
`;

const Button = styled.button`
  background-color: purple;
  padding: 1em 2em;
  display: inline-block;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: gradient 2s infinite;
    transform: scale(1.05);
    background-color: #cd87ee;
    cursor: pointer;
  }
  &:active {
    animation: gradient 3s infinite;
    transform: scale(0.8);
  }
`;

export default function Cards({ image, text, title, url }, index) {
  return (
    <Card>
      <ImageFile src={image} />
      <Title>{title}</Title>
      <CardContent>
        <Message>{text}</Message>
      </CardContent>
      <a href={url} key={index}>
        <Button>VISIT WEBPAGE </Button>
      </a>
    </Card>
  );
}
