import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Mathan L</span>, a Full-Stack Developer
            and Embedded/IoT Engineer from
            <span className="purple"> Erode, Tamil Nadu, India</span>.
            <br />
            I work across frontend, backend, and device-level systems to deliver
            practical digital solutions from idea to production.
            <br />
            <br />
            I am currently pursuing engineering at Velalar College of Engineering
            and Technology while actively building freelance-ready products.
            <br />
            <br />
            What clients can expect when working with me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Clear communication and predictable delivery
            </li>
            <li className="about-activity">
              <ImPointRight /> Performance-focused and scalable implementations
            </li>
            <li className="about-activity">
              <ImPointRight /> Ownership from planning, build, testing, and handoff
            </li>
          </ul>

          <p style={{ color: "#2d719e" }}>
            "I build systems that are dependable, maintainable, and business-ready."
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
