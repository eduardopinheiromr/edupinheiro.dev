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

export default function index() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Timeline />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </Layout>
  );
}
