import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Hristijan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <a
            href="https://www.linkedin.com/in/iamhristijanristeski/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:hristijan_risteski@live.com?body=My custom mail body">
            <EmailIcon />
          </a>
          <a
            href="https://github.com/hristijanristeski"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <h1>About Me</h1>
      <div className="aboutMe">
        <p>
          Hard- working individual, passionate about creating responsive,
          beautiful and user-friendly interfaces.
          <br />
          <br />
          I love creating pages where I'm able to create enjoyable interactions
          and experiences for everyone!
          <br />
          I like combining the worlds of logic and creative design, making
          eye-catching and accesible websites and applications.
          <br />
          <br />
          I am eager to learn new things every day!
          <br />
          <br />
          <p className="skills">
            Skills:
            <br /> HTML, CSS, JavaScript, React, TypeScript, Next.js, React Router, Redux, GraphQL, AntDesign, Git
          </p>
          <br />
        </p>
      </div>
    </div>
  );
}

export default Home;
