import React from "react";
import "../styles/Experience.css";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

const Experience = () => {
  return (
    <div>
      <div className="title">
        <WorkIcon />
        Work <StarIcon />
        Certification <SchoolIcon />
        Education
      </div>
      <VerticalTimeline lineColor="#e9d35b">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - present"
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer at AppGreat
          </h3>
          <p>
            Worked on 3 different projects so far: <br /> - HR System app for
            managing working hours, vacations and sick leaves for employees
            <br /> - Casino / online gaming platform
            <br /> - Gold/crypto trading app for making different transactions
            with gold. <br />
            Working mostly on the frontend part of the projects but also backend
            when needed.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior React Developer at "Pabau"
          </h3>
          <p>
            - Working on a big project building medical software for clinics so
            they can go 100% paper free <br />
            - Implementing new features using React framework, TypeScript and
            Next.js environment <br />
            - Integrating GraphQL APIs <br />- Extending and reusing components
            from ant.design and writing modern reusable components from scratch
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Head of Filling Plant Operations (Production) at "Prilep Brewery"
          </h3>
          <p>
            - Organizing the entire production process from the initial raw
            material to the final product <br />- Leading a team of individuals
            (around 20) who provide quality products through technological
            processes
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Apr 2022 - Jul 2022"
          dateClassName="date"
          iconStyle={{ background: "#21325e", color: "fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            React - The Complete Guide (including Hooks, React Router, Redux)
          </h3>
          <img
            src={certificate2}
            alt="certificate1"
            width="220"
            height="150"
            style={{
              border: "1px solid black",
              textAlign: "center",
              alignItems: "center",
              display: "block",
              justifyContent: "center",
              margin: "auto",
            }}
          />

          <p>Certificate of Completion, by Maximilian Schwarzmüller</p>
          <a
            href="https://www.udemy.com/certificate/UC-3b91aa3a-71d0-4bc9-8364-8a6da02c2af5/"
            target="_blank"
          >
            See credentials
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2022 - Apr 2022"
          dateClassName="date"
          iconStyle={{ background: "#21325e", color: "fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The Complete Web Development Bootcamp, Udemy
          </h3>
          <img
            src={certificate1}
            alt="certificate1"
            width="220"
            height="150"
            style={{
              border: "1px solid black",
              textAlign: "center",
              alignItems: "center",
              display: "block",
              justifyContent: "center",
              margin: "auto",
            }}
          />
          <p>Certificate of Completion, by Dr.Angela Yu</p>
          <a
            href="https://www.udemy.com/certificate/UC-fc84b40f-2c69-4def-bc83-c77df9ca24c9/"
            target="_blank"
          >
            See credentials
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2021 - Dec 2021"
          dateClassName="date"
          iconStyle={{ background: "#21325e", color: "fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            C++ Fundamentals Part I Part II
          </h3>
          <p>by Paul J. Deitel</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Faculty of Technical Sciences, "St. Kliment Ohridski University" -
            Bitola
          </h3>
          <p>Bachelor of Industrial Engineering and Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={"2008 - 2012"}
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "Mirce Acev" High School - Prilep
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
