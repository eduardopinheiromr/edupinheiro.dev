import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Head from "next/head";
import MySkills from "../components/Skills/MySkills";
import MyHistory from "../components/Timeline/MyHistory";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import styled from "styled-components";

const ThemeContainer = styled.body`
  background: #181d29;
  color: #fff;
  .section-title {
    font-size: 52px;
    text-align: center;
    margin: 30px 0;
  }
  .bg-black {
    background: #000;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .link-savanna {
    transition: 0.1s;
  }
  .link-savanna:hover {
    text-decoration: none;
    color: #ffcc52;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #412856;
  }
`;

export default function index() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
        <title>Eduardo Pinheiro | Desenvolvedor Fullstack</title>
      </Head>
      <ThemeContainer>
        <Header />
        <Hero />
        <MySkills />
        <MyHistory />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </ThemeContainer>
    </>
  );
}
