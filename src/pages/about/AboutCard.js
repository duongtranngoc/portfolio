import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am&nbsp;
            <span className="highlight-text">Tran Ngoc Duong</span>&nbsp;from&nbsp;
            <span className="highlight-text">Thai Binh, Viet Nam.</span>
            <br />

            Currently, I am living and working in&nbsp;<span className="highlight-text">Ha Noi.</span>
            <br />

            I'm a final year student at&nbsp;<span className="highlight-text">Thuy Loi University.</span>
            <br />
            <br />

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read comics
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to rap music
            </li>
            <li className="about-activity">
              <ImPointRight /> Write aimlessly
            </li>
          </ul>

          <p style={{ color: "khaki" }}>
            "Are You Living Like The Walking Dead?"
          </p>
          <footer style={{ color: "dimgrey" }}>- TWD -</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
