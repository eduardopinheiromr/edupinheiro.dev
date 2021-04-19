import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const WorkIcon = () => (
  <div className="d-flex justify-content-center align-items-center h-100">
    <img style={{ width: "60%" }} src="./images/work.svg" />
  </div>
);

const StyledTimeline = styled.div`
  .vertical-timeline-element-content {
    box-shadow: 0 3px 25px #000;
  }
`;

const Experience = () => {
  return (
    <>
      <a className="anchor" id="experiencia"></a>
      <div className="container min-height-80 overflow-x-hidden">
        <h2 className="section-title">Experiência profissional</h2>
        <div className="row my-5">
          <StyledTimeline>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    "linear-gradient(222deg, rgba(19,15,232,1) 0%, #4497F4 100%)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #F4C226",
                }}
                date="&nbsp;&nbsp;&nbsp;Janeiro 2021 - Presente"
                iconStyle={{
                  background:
                    "linear-gradient(222deg, rgba(19,15,232,1) 0%, #4497F4 100%)",
                  color: "#fff",
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Front End Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Imobi Places
                </h4>
                <p>CSS, React, Next.JS, GIT, Swagger, SCRUM, Material UI</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    "linear-gradient(222deg, rgba(19,15,232,1) 0%, rgba(246,0,243,1) 100%)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #A911EF",
                }}
                date="&nbsp;&nbsp;&nbsp;Outubro 2020 - Presente"
                iconStyle={{
                  background:
                    "linear-gradient(222deg, rgba(19,15,232,1) 0%, rgba(246,0,243,1) 100%)",
                  color: "#fff",
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Fundador</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Nova Hera
                </h4>
                <p>
                  HTML, CSS, JavaScript, Wordpress, Bootstrap, React, Next.js,
                  Node JS, MongoDB, Firebase(Firestore DB), OAuth2, Stripe,
                  Serverless CMS, Serverless Functions, SEO, Google Search
                  Console, Analytics, Figma, Adobe XD
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    "linear-gradient(222deg, rgba(232,15,15,1) 0%, rgba(11,3,56,1) 100%)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(232,15,15,1)",
                }}
                date="Agosto 2020 - Presente&nbsp;&nbsp;&nbsp;"
                iconStyle={{
                  background:
                    "linear-gradient(222deg, rgba(232,15,15,1) 0%, rgba(11,3,56,1) 100%)",
                  color: "#fff",
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Desenvolvedor Front End
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Supporta Shop
                </h4>
                <p>HTML, CSS, JavaScript, FTP, WordPress, Bootstrap</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </StyledTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
