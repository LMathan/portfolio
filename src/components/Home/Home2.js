import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="section-kicker">What I Deliver</p>
            <h1 className="section-title">
              End-to-End Engineering for <span className="purple">Modern Products</span>
            </h1>
            <p className="home-about-body">
              I combine software engineering and hardware integration to build
              solutions that are practical, scalable, and ready for real-world
              users. From intuitive dashboards to intelligent connected systems,
              I focus on performance, reliability, and business impact.
            </p>

            <div className="capability-grid">
              <article className="capability-card">
                <h3>Full-Stack Web Applications</h3>
                <p>
                  React, Node.js, APIs, authentication, and cloud deployments for
                  fast, maintainable products.
                </p>
              </article>
              <article className="capability-card">
                <h3>Embedded & IoT Systems</h3>
                <p>
                  ESP32/ESP8266 automation, sensor integrations, telemetry, and
                  remote monitoring workflows.
                </p>
              </article>
              <article className="capability-card">
                <h3>System Integration</h3>
                <p>
                  Connect device data to web dashboards and backend services with
                  clean interfaces and traceable flows.
                </p>
              </article>
              <article className="capability-card">
                <h3>Freelance Collaboration</h3>
                <p>
                  Transparent updates, clear milestones, and proactive ownership
                  from planning to delivery.
                </p>
              </article>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="avatar-shell">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
