import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section" id="resume">
        <Particle />
        <p className="section-kicker text-center">Resume</p>
        <h1 className="project-heading text-center mb-4">
          Experience Snapshot <span className="purple">& Credentials</span>
        </h1>
        <div className="resume-highlights">
          <article className="resume-highlight-card">
            <h3>Current Project Focus</h3>
            <ul>
              <li>CollaboBoard: Real-time task platform with React, Node.js, MongoDB, and Socket.IO.</li>
              <li>Smart monitoring systems with ESP32/ESP8266 and cloud-connected dashboards.</li>
              <li>Freelance-ready product delivery with iterative milestones and clear communication.</li>
            </ul>
          </article>

          <article className="resume-highlight-card">
            <h3>Raspberry Pi Experience</h3>
            <ul>
              <li>Built Raspberry Pi-based automation and sensor integration workflows for IoT prototypes.</li>
              <li>Worked with GPIO peripherals, camera modules, and network-based device communication.</li>
              <li>Integrated Pi-generated telemetry into backend services and web interfaces.</li>
            </ul>
          </article>

          <article className="resume-highlight-card">
            <h3>AI Model Development</h3>
            <ul>
              <li>Trained and evaluated deep learning models for computer vision tasks.</li>
              <li>Implemented emotion detection pipelines using TensorFlow/Keras and OpenCV.</li>
              <li>Focused on practical model deployment for real-time inference scenarios.</li>
            </ul>
          </article>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
