import React from "react";
import styled from "styled-components";
import { NavItem } from "../atoms";
import { useAppContext } from "@/context/AppContext";

const Wrapper = styled.nav`
  position: fixed;
  background-color: #007bff;
  padding: 0.5rem 1rem;
  width: 100vw;
  font-family: "burtons";
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: white;
  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;
const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 0.4s;
    :hover {
      border: 1px solid lightblue;
    }
    @media (max-width: 768px) {
      font-size: 0.875rem;
      padding: 0.5rem 0.25rem;
    }
  }
`;

export const Navbar: React.FC = () => {
  const { switchIsEnglish, isEnglish } = useAppContext();
  return (
    <Wrapper>
      <p style={{ padding: "0.5rem" }}>Alan&nbsp;Rutyna</p>
      <Nav>
        <NavItem content={isEnglish ? "About me" : "O Mnie"} link="#about-me" />
        <NavItem content="Portfolio" link="#portfolio" />
        <NavItem content="Tech Stack" link="#tech-stack" />
        <NavItem
          content={isEnglish ? "Download CV" : "Pobierz CV"}
          link={isEnglish ? "./Alan_Rutyna_CV_EN.pdf" : "./Alan_Rutyna_CV.pdf"}
        />
        <li onClick={switchIsEnglish}>{isEnglish ? "PL" : "EN"}</li>
      </Nav>
    </Wrapper>
  );
};
