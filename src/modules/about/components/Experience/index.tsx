import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

import { experience } from "../../constants/experience";
import { Container, Heading } from "@chakra-ui/react";
import { Link } from "@modules/shared/components/Link";

const Experience = () => {
  return (
    <Container color="white">
      <VerticalTimeline>
        {experience.map((job, key) => (
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
            icon={<MdWork />}
          >
            <Heading color="white!important">{job.title}</Heading>
            <Link href={job.link} target="_blank" rel="noreferrer">
              <h4 className="vertical-timeline-element-subtitle">
                {job.company}
              </h4>
            </Link>
            <p>{job.subtitle}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
