import {
  PageTags,
  Hero,
  Skills,
  Education,
  Experience,
  Layout,
  AboutMe,
  Projects,
  Contact,
} from "@components";
export default function HomePage() {
  return (
    <>
      <PageTags
        title="Eduardo Pinheiro - Desenvolvedor Fullstack"
        description="Desenvolvedor Fullstack Pleno - React/Node"
      />
      <Layout>
        <Hero />
        <Skills />
        <AboutMe />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
