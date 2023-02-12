import React from "react";
import styled from "styled-components";
import { NavItem } from "../atoms";
import { useAppContext } from "@/context/AppContext";

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
  gap: 0.25rem;
`;

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  const context = useAppContext();
  console.log(context);
  return (
    <Wrapper>
      <p>Alan Rutyna</p>
      <Nav>
        <NavItem content="About me" link="#about-me" />
        <NavItem content="Portfolio" link="#portfolio" />{" "}
        <NavItem content="Tech Stack" link="#tech-stack" />{" "}
        <NavItem content="Download CV" link="#cv" />
      </Nav>
    </Wrapper>
  );
};
