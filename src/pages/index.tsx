import Head from "next/head";
import styled from "styled-components";
import {
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  Timeline,
} from "components";

const ThemeContainer = styled.div`
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
        <title>Eduardo Pinheiro | Desenvolvedor Fullstack</title>
      </Head>
      <ThemeContainer>
        <Header />
        <Hero />
        <Skills />
        <Timeline />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </ThemeContainer>
    </>
  );
}
