import React from "react";
import styled from "styled-components";
import animatedwave from "./../media/animatedwave.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialTab from "./Socials";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: no-wrap;
  align-items: center;
  background-image: url(${animatedwave});
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Title = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  color: white;
  text-align: center;
  font-size: 45px;
  letter-spacing: 0.8px; */
`;

const Forum = styled.form`
  border-radius: 50px;
  background: #bcb2be26;
  box-shadow: 20px 20px 60px #2c1232b5, -20px -20px 60px #a187a1;
  height: 550px;
  width: 400px;
  padding: 30px 40px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: monospace;
  justify-content: space-between;
  font-size: 25px;
  margin: 100px 0px 0px 0px ;
@media(max-width: 600px){
  width: 290px;
}
@media(max-height: 780px){
  width:   padding: 30px;
}
`;

const Button = styled.button`
  padding: 1em 1.2em;
  background: #dc70ff;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  margin: 7px;
  transition: 0.2s ease-in-out;
  box-shadow: 6px 6px 14px #c096c9, 6px -6px 10px rgb(121 71 71 / 50%),
    6px 6px 8px rgb(255 255 255 / 8%), 6px 6px 10px rgb(0 0 0 / 15%);

  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
      inset -2px -2px 4px rgba(255, 255, 255, 0.5),
      inset 2-px 2px 2px rgba(255, 255, 255, 0.075),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
    background: #bcb2be26;
  }
`;

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e7j1lld',
        'template_9uf0ml5',
        form.current,
        'PX2LoqQNNlQKOxiot'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <PageContainer>
      <Forum ref={form} onSubmit={sendEmail}>
      <Title>Contact Me</Title>
        <label>Name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="email" />

        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject" />

        <label>Message</label>
        <textarea name="message" />

        <Button type="submit" value="Send">
          Submit
        </Button>
      </Forum>
      <SocialTab />
    </PageContainer>
  );
}
