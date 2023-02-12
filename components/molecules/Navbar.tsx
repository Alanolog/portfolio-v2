import React from "react";
import styled from "styled-components";
import { NavItem } from "../atoms";
import { useAppContext } from "@/context/AppContext";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Wrapper = styled.nav`
  background-color: #007bff;
  padding: 1rem;
  width: 100vw;
  font-family: "burtons";
  display: flex;
  justify-content: space-between;
  color: white;
`;
const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.75rem;
  li {
    cursor: pointer;
  }
`;

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  const { switchIsEnglish, isEnglish } = useAppContext();
  return (
    <Wrapper>
      <p>Alan Rutyna</p>
      <Nav>
        <NavItem content={isEnglish ? "About me" : "O Mnie"} link="#about-me" />
        <NavItem content="Portfolio" link="#portfolio" />
        <NavItem content="Tech Stack" link="#tech-stack" />
        <NavItem
          content={isEnglish ? "Download CV" : "Pobierz CV"}
          link={isEnglish ? "./Alan_Rutyna_CV_EN.pdf" : "./Alan_Rutyna_CV.pdf"}
        />{" "}
        <li onClick={switchIsEnglish}>{isEnglish ? "PL" : "EN"}</li>
      </Nav>
    </Wrapper>
  );
};
