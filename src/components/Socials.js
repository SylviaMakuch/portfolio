import React from "react";
import styled from "styled-components";
import linkedin from "./../media/linkden.svg";
import github from "./../media/github.svg";

const socialIcons = [
  {
    key: "linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/sylvia-makuch-6baa4a66/",
  },
  {
    key: "github",
    icon: github,
    url: "https://github.com/SylviaMakuch",
  },
];
const SocialsGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialsIcons = styled.img`
  height: 28px;
  margin: 20px;
  :hover {
    transform: rotateY(360deg);
    transition: 0.5s;
  }
`;

// const Contact = styled.a`
//   color: white;
// `;

const SocialTab = () => {
  return (
    <SocialsGrid>
      {socialIcons.map((value, index) => {
        return (
          <a href={value.url} target="blank" key={index}>
            <SocialsIcons src={value.icon} />
          </a>
        );
      })}
    </SocialsGrid>
  );
};

export default SocialTab;
