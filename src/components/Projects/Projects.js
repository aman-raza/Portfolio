import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import twit from "../../Assets/Projects/twit.png";
import exploit from "../../Assets/Projects/exploit.png";
import name from "../../Assets/Projects/name.png";
import gify from "../../Assets/Projects/gify.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="ChatApp"
              description="A real-time chat application built with ReactJS, NodeJS and Socket.io with a lots of special features like the integration of emojis and also the room feature where a bunch of people can chat all together."
              link="https://github.com/aman-raza/ChatApp"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exploit}
              isBlog={false}
              title="Exploit"
              description="A simple python script for the exploitation of vulnerable softwares using buffer overflow method."
              link="https://github.com/aman-raza/Exploit"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twit}
              isBlog={false}
              title="TwitScript"
              description="A simple script that fetches tweets of a specified hashtag or location."
              link="https://github.com/aman-raza/TwitScript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={name}
              isBlog={false}
              title="Name"
              description="A simple name generator that will generate a random name according to the user's input, even if a user put a single letter in the search bar it will suggest all the words using a special built-in library."
              link="https://github.com/aman-raza/name"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gify}
              isBlog={false}
              title="GifySearch"
              description="A gif search page made using simple api fetching method, simple interface for type and search work, one just have to type what they want."
              link="https://github.com/aman-raza/GiphySearch"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A simple weather application that will help you to keep track of the weather of your city according to your location with all the details including sunset, humidity, pressure and wind speed."
              link="https://github.com/aman-raza/react-weather-app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
