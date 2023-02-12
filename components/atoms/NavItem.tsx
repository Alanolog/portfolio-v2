import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.li`
  padding: 0 1rem;
  font-family: "burtons";
  color: white;
`;
interface IProps {
  content: string;
  link: string;
}
export const NavItem: React.FC<IProps> = ({ content, link }) => {
  return (
    <Wrapper>
      <Link href={link}>{content}</Link>
    </Wrapper>
  );
};
