import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import ProfilePic from "../assets/profile.jpg";
import HtmlLogo from "../assets/html-logo.webp";
import CssLogo from "../assets/css-logo.webp";
import GitLogo from "../assets/git-logo1.png";
import AntDesignLogo from "../assets/ant-design-logo1.png";
import JsLogo from "../assets/js-logo1.jpg";
import MUILogo from "../assets/material-ui-logo.png";
import NextJsLogo from "../assets/next-js-logo1.png";
import ReactLogo from "../assets/logo-react-icon.png";
import ReactRouterLogo from "../assets/react-router-logo1.png";
import ReduxLogo from "../assets/redux-logo.png";
import TypescriptLogo from "../assets/typescript-logo1.png";
import GraphQlLogo from "../assets/graphql-logo.png";

import "../styles/Home.css";

const Home = ({ theme }) => {
  const logos = [
    HtmlLogo,
    CssLogo,
    JsLogo,
    ReactLogo,
    TypescriptLogo,
    NextJsLogo,
    ReactRouterLogo,
    ReduxLogo,
    GitLogo,
    AntDesignLogo,
    MUILogo,
    GraphQlLogo,
  ];
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
            Hard-working individual, passionate about creating responsive,
            beautiful and user-friendly interfaces.
            <br />
            I love creating pages where I'm able to create enjoyable
            interactions and experiences for everyone!
            <br />
            I like combining the worlds of logic and creative design, making
            eye-catching and accesible websites and applications.
            <br />
            <br />I am eager to learn new things every day!
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
      <div className="skills">
        <div className="aboutMe">Skills</div>
        <div className="skillsContainer" style={{ bottom: "auto" }}>
          {logos.map((logo, index) => (
            <img
              key={index}
              className="logo"
              style={{
                borderRadius: "50%",
                width: "5%",
                marginRight: "10px",
                transition: "width 0.3s ease",
              }}
              src={logo}
              alt={`logo-${index}`}
              onMouseOver={(e) => {
                e.target.style.width = "7%";
                e.target.style.boxShadow =
                  theme === "dark"
                    ? "hsl(180deg 51.4% 51.6% / 0%) 0px 54px 55px, rgb(68 195 195 / 71%) 0px -12px 30px, rgb(68 195 195 / 76%) 0px 4px 6px, rgb(68 195 195 / 37%) 0px 12px 13px, rgb(68 195 195 / 0%) 0px -3px 5px"
                    : "";
              }}
              onMouseOut={(e) => {
                e.target.style.width = "5%";
                e.target.style.boxShadow = "none";
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
