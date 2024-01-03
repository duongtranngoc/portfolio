import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/img/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Introduce() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="highlight-text"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I started learning information technology and was exposed to my first programming language at the age of&nbsp;
                            <i><b className="highlight-text">15</b></i>.
                            However, it wasn't until I was&nbsp;
                            <i><b className="highlight-text">21</b></i>, after studying&nbsp;
                            <i><b className="highlight-text">Web technology</b></i>&nbsp;
                            at university, that I truly became interested in programming.

                            <br />
                            <br />

                            I have basic knowledge of&nbsp;
                            <i><b className="highlight-text">HTML, CSS, JavaScript and PHP.</b></i>

                            <br />
                            <br />

                            My field of interest is building&nbsp;<i><b className="highlight-text">Web applications</b></i>,
                            making products with modern technologies such as&nbsp;
                            <i><b className="highlight-text">ExtJS, ReactJS, NodeJS, Laravel, ....</b></i>

                            <br />
                            <br />

                            In addition, I am also a writer of short stories and novels with the pen name&nbsp;
                            <b className="highlight-text">THY - Tran Ha Yem.</b>
                        </p>
                    </Col>
                    <Col md={4} className="my-avatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="highlight-text">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/duongtranngoc"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/duongtranngoc.info"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillFacebook />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/duongtranngoc"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/duongtranngoc.info"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Introduce;
