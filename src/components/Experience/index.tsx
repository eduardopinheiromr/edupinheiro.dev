import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "./WorkIcon";
import Link from "next/link";

import * as S from "./styled";

const jobs = [
  {
    gradient: "linear-gradient(222deg, #FEB933 0%, #81009D 100%)",
    arrowColor: "#FEB933",
    date: "Junho 2021 - Presente",
    title: "Front End Engineer",
    company: "Playkids",
    link: "https://loja.leiturinha.com.br/",
    subtitle: "CSS, React, Next.JS, GIT, Swagger, SCRUM, Tailwindcss",
  },
  {
    gradient: "linear-gradient(222deg, rgba(19,15,232,1) 0%, #4497F4 100%)",
    arrowColor: "#F4C226",
    date: "Janeiro 2021 - Junho 2021",
    title: "Front End Engineer",
    company: "Imobi Places",
    link: "https://imobiplaces.com.br/",
    subtitle: "CSS, React, Next.JS, GIT, Swagger, SCRUM, Material UI",
  },
  {
    gradient:
      "linear-gradient(222deg, rgba(19,15,232,1) 0%, rgba(246,0,243,1) 100%)",
    arrowColor: "#A911EF",
    date: "Outubro 2020 - Presente",
    title: "Fundador",
    company: "Nova Hera",
    link: "http://novahera.com.br/",
    subtitle:
      " HTML, CSS, JavaScript, Wordpress, Bootstrap, React, Next.js, Node JS, MongoDB, Firebase(Firestore DB), OAuth2, Stripe, Serverless CMS, Serverless Functions, SEO, Google Search Console, Analytics, Figma, Adobe XD",
  },
  {
    gradient:
      "linear-gradient(222deg, rgba(232,15,15,1) 0%, rgba(11,3,56,1) 100%)",
    arrowColor: "rgba(232,15,15,1)",
    date: "Agosto 2020 - Outubro 2020",
    title: "Desenvolvedor Front End",
    company: "Supporta Shop",
    link: "https://www.supporta.shop/",
    subtitle: "HTML, CSS, JavaScript, FTP, WordPress, Bootstrap",
  },
];

const Experience = () => {
  return (
    <>
      <a className="anchor" id="experiencia"></a>
      <div className="container min-height-80 overflow-x-hidden">
        <h2 className="section-title">Experiência profissional</h2>
        <div className="row my-5">
          <S.Root>
            <VerticalTimeline>
              {jobs.map((job, key) => (
                <VerticalTimelineElement
                  key={key}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: job.gradient,
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid " + job.arrowColor,
                  }}
                  date={job.date}
                  iconStyle={{
                    background: job.gradient,
                    color: "#fff",
                  }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {job.title}
                  </h3>
                  <Link href={job.link} passHref>
                    <a className="link" target="_blank">
                      <h4 className="vertical-timeline-element-subtitle">
                        {job.company}
                      </h4>
                    </a>
                  </Link>
                  <p>{job.subtitle}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </S.Root>
        </div>
      </div>
    </>
  );
};

export default Experience;
