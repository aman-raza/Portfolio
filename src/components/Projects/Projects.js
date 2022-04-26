import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import calculator from "../../Assets/Projects/calculator.png";
import menuweb from "../../Assets/Projects/menuweb.png";
import name from "../../Assets/Projects/name.png";
import todo from "../../Assets/Projects/todo.png";
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
              description="A real-time chat application built with ReactJS, NodeJS and Socket.io with a lots of special features like the integration of emojis and a group chat feature as well."
              link="https://github.com/aman-raza/ChatApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menuweb}
              isBlog={false}
              title="Menu Website"
              description="A website for a restaurant that has a menu with an integration of category wise distribution which will help people explore menu according to their preferences a menu webpage with different menus in it."
              link="https://github.com/aman-raza/react-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={name}
              isBlog={false}
              title="Name"
              description="A simple name generator that will generate a random name according to the user's input, even if a user put a single letter in the search bar it will suggest all the word using a special builtin library."
              link="https://github.com/aman-raza/name"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo App"
              description="A simple todo application that will help you to keep track of your tasks and also will help you to keep track of your daily activities with all the CRUD operations."
              link="https://github.com/aman-raza/react-todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A simple weather application that will help you to keep track of the weather of your city and also will help you to keep track of the weather of your city according to your location with all details like sunset, humidity, pressure and spped with graphical representation of each details also a representaion of image for the feel of the weather."
              link="https://github.com/aman-raza/react-weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A simple calculator that will help you to perform basic operations like addition, subtraction, multiplication and division with all the mathematical operations with a lot of features."
              link="https://github.com/aman-raza/react-calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
