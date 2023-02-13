import React from "react";
import styled from "styled-components";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Wrapper = styled.footer`
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid lightgray;
  h3 {
    font-size: 1.25rem;
    font-family: "burtons";
    font-weight: 100;
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
`;
export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <h3>
        Alan Rutyna 2023 <AiOutlineCopyrightCircle />
      </h3>
    </Wrapper>
  );
};
