import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import ProfilePic from "../assets/profile.jpg";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Hristijan</h2>
        <div className="prompt">
          <p>
            A frontend enthusiast committed to the art and science of web
            development
          </p>
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
      <h1 className="aboutMeTitle">About Me</h1>
      <div className="aboutMe">
        <div className="text">
          <p>
            Hard- working individual, passionate about creating responsive,
            beautiful and user-friendly interfaces.
            <br />
            <br />
            I love creating pages where I'm able to create enjoyable
            interactions and experiences for everyone!
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
              <br /> HTML, CSS, JavaScript, React, TypeScript, Next.js, React
              Router, Redux, GraphQL, AntDesign, Material UI, Git
            </p>
            <br />
          </p>
        </div>
        <div className="image">
          <img
            style={{
              borderRadius: "50%",
              width: "60%",
            }}
            src={ProfilePic}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
