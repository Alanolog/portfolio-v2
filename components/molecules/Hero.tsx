import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Wrapper = styled.div`
  background-image: url("./main-bg.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  padding: 1rem;
  color: white;
  font-family: sans-serif;
  background-color: #00000075;
  border-radius: 1rem;
  text-align: center;
  p {
    font-size: 3rem;
    font-weight: 100;
    font-style: italic;
  }
  span {
    font-size: 1.25rem;
    font-weight: 100;
    display: block;
    svg {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    p {
      font-size: 2.25rem;
      font-style: normal;
    }
    span {
      font-size: 1rem;
    }
  }
`;
export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <MainBox>
        <p>Alan&nbsp;Rutyna</p>
        <span>React&nbsp;Frontend&nbsp;Developer</span>
        <span>
          <Link href="https://github.com/Alanolog" target="_blank">
            <AiOutlineGithub />
          </Link>
        </span>
      </MainBox>
    </Wrapper>
  );
};
