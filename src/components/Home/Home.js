import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="hero-chip">Available for Freelance Projects</div>

              <h1 className="heading">Building Reliable Digital Products</h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> MATHAN L</strong>
              </h1>

              <p className="hero-description">
                Full-Stack Developer and Embedded/IoT Engineer helping teams ship
                web platforms, connected device solutions, and production-ready
                systems with clean architecture and measurable outcomes.
              </p>

              <div>
                <Type />
              </div>

              <div className="hero-cta">
                <Button as={Link} to="/contact" className="hero-btn hero-btn-primary">
                  Book a Discovery Call
                </Button>
                <Button
                  as={Link}
                  to="/project"
                  variant="light"
                  className="hero-btn hero-btn-secondary"
                >
                  View Case Studies
                </Button>
              </div>

              <div className="hero-proof">
                <div className="proof-item">
                  <strong>20+</strong>
                  <span>Projects Built</span>
                </div>
                <div className="proof-item">
                  <strong>Web + IoT</strong>
                  <span>Cross-Domain Delivery</span>
                </div>
                <div className="proof-item">
                  <strong>Fast</strong>
                  <span>Communication & Iteration</span>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="home-visual">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
