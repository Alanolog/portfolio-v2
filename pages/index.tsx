import { Navbar, Hero, AboutMe, Portfolio } from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alan Rutyna Portfolio Page</title>
        <meta
          name="description"
          content="Alan Rutyna portfolio page designed in NextJS with TypeScript "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
    </>
  );
}
