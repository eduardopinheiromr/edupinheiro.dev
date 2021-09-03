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

export default function index() {
  return (
    <>
      <Head>
        <title>Eduardo Pinheiro | Desenvolvedor Fullstack</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <Skills />
        <Timeline />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
