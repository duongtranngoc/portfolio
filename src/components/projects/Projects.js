import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import theBand from "../../assets/img/projects/the-band.PNG";
import portfolio from "../../assets/img/projects/portfolio.PNG";
import './Project.scss';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="highlight-text">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theBand}
              isBlog={false}
              title="The band template"
              description="Band website template built with pure html, css, javascript."
              ghLink="https://github.com/duongtranngoc/the-band"
              demoLink="https://duongtranngoc.github.io/the-band/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My collection of products and projects are built using ReactJS and Bootstrap."
              ghLink="https://github.com/duongtranngoc/portfolio"
              demoLink="https://duongtranngoc.github.io/portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theBand}
              isBlog={false}
              title="The band template"
              description="Band website template built with pure html, css, javascript."
              ghLink="https://github.com/duongtranngoc/the-band"
              demoLink="https://duongtranngoc.github.io/the-band/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My collection of products and projects are built using ReactJS and Bootstrap."
              ghLink="https://github.com/duongtranngoc/portfolio"
              demoLink="https://duongtranngoc.github.io/portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theBand}
              isBlog={false}
              title="The band template"
              description="Band website template built with pure html, css, javascript."
              ghLink="https://github.com/duongtranngoc/the-band"
              demoLink="https://duongtranngoc.github.io/the-band/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
