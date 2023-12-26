import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiExtjs,
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import { MdPhp } from "react-icons/md";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiExtjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
