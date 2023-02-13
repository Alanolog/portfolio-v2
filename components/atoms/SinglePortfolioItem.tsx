import React from "react";
import styled from "styled-components";
import { useAppContext } from "@/context/AppContext";

interface IProps {
  image: string;
  link: string;
  title: string;
  description?: { pl: string; en: string };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  max-width: 45%;
  a {
    font-size: 1.5rem;
    color: teal;
  }
  img {
    max-width: 100%;
  }
  p {
    margin: 1rem 0;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    max-width: 90%;
    a {
      font-size: 1.125rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export const SinglePortfolioItem: React.FC<IProps> = ({
  link,
  title,
  image,
  description,
}) => {
  const { isEnglish } = useAppContext();
  return (
    <Wrapper>
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
      {description ? (
        <p>{isEnglish ? description?.en : description?.pl}</p>
      ) : null}
      <img src={image} alt={title} />
    </Wrapper>
  );
};
