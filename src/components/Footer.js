import React from "react";
import styled from "styled-components";
import SocialTab from "./Socials";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(89deg, #cd87ee, #87e0ee);
  background-size: 300% 100%;

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

const Contact = styled.a`
  color: #edda2e;
  font-size: 30px;
  margin: 20px;
`;


export default function Footer() {
    return(
        <PageContainer id="contact">
             <SocialTab />
             <Link to="/contactform"> <Contact>Click here to Contact Me</Contact></Link>
        </PageContainer>
    )
}