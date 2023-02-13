import React from "react";
import styled from "styled-components";
import { SinglePortfolioItem } from "../atoms";
import { useAppContext } from "@/context/AppContext";
import {
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

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

const WorkProjects = styled.div`
  margin-top: 1rem;
  max-width: 1280px;
  padding: 1.25rem 0;
  font-size: 1.25rem;
  line-height: 1.75rem;
  p {
    text-align: center;
    padding: 0.25rem 0;
  }
  a {
    color: teal;
  }
  ul {
    list-style: disc;
    list-style-position: inside;
    margin-top: 0.5rem;
    margin-bottom: 1.25rem;
    text-align: center;
  }
  li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: #1f2937;
  }
  h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
    ul {
      list-style: none;
    }
  }
`;
export const Portfolio: React.FC = () => {
  const { isEnglish } = useAppContext();
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
      <WorkProjects>
        <h3>
          {isEnglish
            ? "The most challenging projects in which I participated"
            : "Największe projekty w których brałem udział"}
        </h3>
        <p>
          {isEnglish
            ? "Unfortunately, I can't show the code from the projects in my old job due to the privacy status of repositories, so I only leave links to the production versions."
            : "Niestety kodu z projektów w dawnej pracy nie mogę pokazać z względu na ustawienia prywatności repozytoriów, dlatego jedynie pozostawiam linki do wersji produkcyjnych."}
        </p>
        <ul>
          <li>
            <SiNextdotjs />
            <SiTypescript />
            <SiStyledcomponents />
            <a
              href="https://jedynka.polskieradio.pl/"
              target="_blank"
              rel="noreferrer"
            >
              Jedynka Polskiego Radia
            </a>
          </li>
          <li>
            <RiReactjsFill />
            <SiSass />
            <a
              href="https://reportaz.polskieradio.pl/"
              target="_blank"
              rel="noreferrer"
            >
              Studio Reportażu i Dokumentu Polskiego Radia
            </a>
          </li>
          <li>
            <SiCss3 />
            <SiHtml5 />
            <SiJavascript />
            <a
              href="https://www.polskieradio.pl/377/9933"
              target="_blank"
              rel="noreferrer"
            >
              Muzyczne Źródełko 2022
            </a>
          </li>
        </ul>
      </WorkProjects>
    </Wrapper>
  );
};
