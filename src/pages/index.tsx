import {
  Contact,
  Education,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
  Timeline,
} from "components";
import { PageTags } from "components/PageTags";

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
        <Timeline />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
