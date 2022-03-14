import React from "react";
import styled, { keyframes } from "styled-components";
import circles1 from "./../media/circles1.svg";
import circles2 from "./../media/circles2.svg";

const moveUp = keyframes`
	0%{
		transform: translateY(0px);
	}
	50% {
		transform: translateY(70%);
	}
  100%{
		transform: translateY(0px);
	}
`;


const moveDown = keyframes`
	0%{
		transform: translateY(70%);
	}
	50% {
		transform: translateY(0%);
	}
  100% {
		transform: translateY(70%);
	}
`;

const Circles2 = styled.img`
  animation: ${moveUp} 8.5s linear infinite;
  position: absolute;
  right: 0px;
  bottom: 68px;
`;

const Circles1 = styled.img`
  animation: ${moveDown} 8.5s infinite linear;
  position: absolute;
  right: 0px;
  bottom: 98px;
`;


export default function Circles() {
    return (
        <Circles1 src={circles1} />
        <Circles2 src={circles2} />
        );
    }
    