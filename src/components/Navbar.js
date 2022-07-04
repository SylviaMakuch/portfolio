import React from "react";
import styled from "styled-components"; 

const NavbarContainer = styled.div`
    display: flex;
    border-bottom: 1px solid;
    justify-content: flex-end;
`;

const Text = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 100;
    cursor: pointer;
    @media (max-width: 1200px) {
        justify-content: space-between;
        font-size: 24px;
    }
    @media (max-width: 500px) {
        justify-content: space-between;
        font-size: 14px;
    }
    :hover{
        color: pink;
    }
`;


export default function Navbar() {
    const setScrolledPage = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth" 
                
            });
        }
    }

    // const [scrollPage, setScrollPage] = useState(false);

    return(
        <NavbarContainer>
            <Text onClick={() => setScrolledPage("about")}> ABOUT</Text>
            <Text onClick={() => setScrolledPage("skills")}> SKILLS</Text>
            <Text onClick={() => setScrolledPage("projects")}> PROJECTS</Text>
            <Text onClick={() => setScrolledPage("contact")}> CONTACT</Text>
        </NavbarContainer>
      
    )
}