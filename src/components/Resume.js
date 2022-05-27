import React from "react";
import styled from "styled-components";
import resume from "./../media/resume.svg";

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ResumeImage = styled.img`
    height: 95%;
    /* @media(max-width: 700px){
        height: 95; 
    } */
`;

export default function Resume() {
    return (
        <PageContainer>
            <ResumeImage src={resume} />
        </PageContainer>
    );
}