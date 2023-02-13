import React from "react";
import styled from "styled-components";
import { SinglePortfolioItem } from "../atoms";
import web1 from "@/public/web1.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  max-width: 100vw;
  h2 {
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 5vh;
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;
const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Portfolio: React.FC = () => {
  const items = [
    {
      link: "https://alan-rutyna-ecommerce-shop.vercel.app/",
      image: "./web4.png",
      title: "Ecommerce shop",
      description: {
        pl: "Sklep E-commerce stworzony za pomocą TailwindCSS, NextJS i Typescript",
        en: "Ecommerce shop made in TailwindCSS, NextJS, and Typescript",
      },
    },
    {
      link: "https://task-manager-alanolog.vercel.app/",
      image: "./web1.png",
      title: "Task Manager",
      description: {
        pl: "Task Manager stworzony z użyciem NextJS, TypeScript, Redux i Sass",
        en: "Task Manager created in NextJS, TypeScript, Redux and Sass",
      },
    },
    {
      link: "https://alan-rutyna-api.onrender.com/api-docs/#/",
      image: "./web2.png",
      title: "API for Task Manager",
      description: {
        pl: "API stworzone przy użyciu ExpressJS, i MongoDB",
        en: "API created with usage of ExpressJS, and MongoDB",
      },
    },
    {
      link: "https://calculator-app-taupe-nine.vercel.app/",
      image: "./web3.png",
      title: "IOS Calculator Copy",
      description: {
        pl: "Dokładna kopia kalkulatora z IOS w TailwindCSS, NextJS + TypeScript",
        en: "Exact copy of calculator from IOS in TailwindCSS, NextJS + TypeScript",
      },
    },
  ];
  return (
    <Wrapper id="portfolio">
      <h2>Portfolio</h2>
      <ItemsContainer>
        {items.map((el, id) => {
          return (
            <SinglePortfolioItem
              link={el.link}
              title={el.title}
              image={el.image}
              description={el.description}
              key={id}
            />
          );
        })}
      </ItemsContainer>
    </Wrapper>
  );
};
