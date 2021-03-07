import React from "react";
import styled from "styled-components";

function Landing() {
  return (
    <>
      <LandingContainer>
        <h1>Vsight</h1>
        <p>Best team ever</p>
      </LandingContainer>
      <Button>Join team</Button>
    </>
  );
}

export default Landing;

const LandingContainer = styled.div`
  margin-top: 6em;
  h1 {
    position: relative;
    z-index: -1;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 9em;
    letter-spacing: 5px;
  }
  p {
    position: relative;
    z-index: -1;
    font-size: 1.2em;
    color: #ccc;
    padding: 0 40px;
    margin-top: -20px;
    font-weight: 300;
    letter-spacing: 5px;
  }

  @media screen and (max-width: 426px) {
    padding: 0 20px;
    h1 {
      font-size: 4em;
      letter-spacing: 5px;
    }
    p {
      font-size: 1em;
    }
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 40px;
  color: purpel;
  border: 2px solid #ccc;
  color: #fff;
  border-radius: 4px;
  margin: 40px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s ease;
  font-size: 16px;
  outline: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:active {
    outline: none;
  }
  @media screen and (max-width: 426px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`;
