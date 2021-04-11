import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => (
  <div className="d-flex justify-content-center align-items-center h-100">
    <img style={{ width: "60%" }} src="./images/work.svg" />
  </div>
);

const Experience = () => {
  return (
    <>
      <a className="anchor" id="experiencia"></a>
      <div className="container min-height-80 overflow-x-hidden">
        <h2 className="section-title">Experiência profissional</h2>
        <div className="row my-5">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(222deg, rgba(19,15,232,1) 0%, rgba(246,0,243,1) 100%)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
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
              <h4 className="vertical-timeline-element-subtitle">Nova Hera</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
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
                borderRight: "7px solid  rgb(33, 150, 243)",
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
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
