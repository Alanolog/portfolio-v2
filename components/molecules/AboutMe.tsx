import React from "react";
import styled from "styled-components";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import avatar from "@/public/avatar.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
  min-height: 90vh;
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
`;
const ImageBox = styled.div`
  position: relative;
  background-color: teal;
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
      <p>
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
      </p>
    </Wrapper>
  );
};
