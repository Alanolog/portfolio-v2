import React from "react";
import styled from "styled-components";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import code from "@/public/code.png";
import learning from "@/public/learning.png";
import {
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFreecodecamp,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
  min-height: 90vh;
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 5vh;
    font-size: 3rem;
  }
  h4 {
    font-size: 1.75rem;
    font-weight: 200;
    margin-bottom: 5vh;
  }
  p {
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;
const ImageBox = styled.div`
  position: relative;
  background: rgb(0, 128, 128);
  background: linear-gradient(
    60deg,
    rgba(0, 128, 128, 0.95) 53%,
    rgba(0, 255, 255, 1) 100%
  );
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 40px auto;
  overflow: hidden;
  max-width: 100%;
  img {
    object-fit: cover;
  }
`;
const CardsWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 13rem;
    height: 13rem;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 1/3;
    height: 36rem;
    padding: 1rem;
    max-height: 100vh;
    border-radius: 20px;
    border: 2px solid lightgray;
    max-width: 45%;
  }
  h3 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    padding: 0.25rem 0;
    font-weight: 300;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    gap: 1rem;
    line-height: 2rem;
    color: #1f2937;
    font-size: 1.25rem;
  }
  li {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    align-items: center;
  }
  .big-icon {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 6rem;
      height: 6rem;
    }
    article {
      padding: 2.5rem 0;
      height: auto;
      max-width: 100%;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    ul {
      padding: 0.5rem 0;
      gap: 1rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .big-icon {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`;
export const AboutMe: React.FC = () => {
  const { isEnglish } = useAppContext();
  return (
    <Wrapper id="about-me">
      <h2>{isEnglish ? "About Me" : "O Mnie"}</h2>
      <ImageBox>
        <Image alt="avatar" src={avatar} fill />
      </ImageBox>
      <h4>
        {isEnglish
          ? "Hi, I'm Alan Rutyna, 19 years old programmer from Poland"
          : "Cześć, jestem Alan Rutyna, 19 letni programista z Śląska"}
      </h4>
      <CardsWrapper>
        <article>
          <div>
            <Image alt="code icon" src={code} />
          </div>
          <h3>
            {isEnglish ? "Languages that I use:" : "Programuje przy użyciu:"}
          </h3>
          <ul>
            <li>
              <p>
                <SiCss3 />
                <SiHtml5 />
                <SiJavascript />
              </p>
              <span style={{ wordBreak: "keep-all" }}>
                HTML&nbsp;CSS&nbsp;JavaScript
              </span>
            </li>
            <li>
              <RiReactjsFill />
              <SiNextdotjs />
              <SiRedux /> ReactJS&nbsp;Redux&nbsp;NextJS
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <SiSass />
              <SiTailwindcss /> Sass&nbsp;/&nbsp;Tailwind
            </li>
            <li>
              <SiMongodb />
              <SiExpress /> {isEnglish ? "Basic" : "Podstawy"}
              &nbsp;ExpressJS+MongoDB
            </li>
          </ul>
        </article>
        <article>
          <div>
            <Image alt="learning icon" src={learning} />
          </div>
          <h3>
            {isEnglish
              ? "Education & Experience"
              : "Wykształcenie & Doświadczenie:"}
          </h3>
          <ul>
            <li>
              <MdWork className="big-icon" />
              11.2021 - 11.2022 (13 miesięcy) - Polskie Radio S.A.
            </li>
            <li>
              <SiFreecodecamp className="big-icon" />
              07.2021 - 09.2021 Coders&nbsp;Lab{" "}
              {isEnglish
                ? "Javascript Developer Bootcamp"
                : "Kurs JavaScript Developer"}
            </li>
            <li>
              <IoIosSchool className="big-icon" />
              {isEnglish
                ? "I study weekends in high school"
                : "W Weekendy uczę się w Liceum Ogólnokształcącym"}
            </li>
          </ul>
        </article>
      </CardsWrapper>
      {/* <p>
        {isEnglish
          ? "In 2019 I started to learn how to write code in 1st grade of High School"
          : "W 2019 roku zacząłem uczyć się pisać kod w 1 klasie technikum informatycznego"}
      </p>
      <p>
        {isEnglish
          ? "In the summer of 2021, I took part in CodersLab JavaScript Bootcamp"
          : "W 2021 roku przez wakacje wziąłem udział w Bootcampie CodersLab Javascript Developer"}
      </p>
      <p>
        {isEnglish
          ? "I started my first job at Polskie Radio in November 2021, where I learned a lot, working there until November 2022 (13 months)"
          : "Pierwszą pracę podjąłem w Polskim Radiu w listopadzie 2021 gdzie nauczyłem się bardzo dużo, pracując tam do Listopada 2022 (13 miesięcy)"}
      </p>
      <p>
        {isEnglish
          ? "I am currently studying at Weekend High School to reconcile work with formal education"
          : "Obecnie uczę się w Liceum Weekendowym aby pogodzić pracę z edukacją formalną"}
      </p>
      <p>
        {isEnglish
          ? "I am interested in History, Powerlifting, Dietetics, and Programming"
          : "Interesuję się Historią, Trójbojem Siłowym, Dietetyką, i Programowaniem"}
      </p> */}
    </Wrapper>
  );
};
