import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import finch2 from "../../Assets/Projects/finch2.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      imgPath: finch2,
      title: "Finch 2.0 Robot Projects",
      stack: "Python · JavaScript · Robotics · Sensors · BirdBlox · MakeCode",
      description:
        "Educational robotics projects using the Finch 2.0 platform featuring light/obstacle/sound sensing, line-tracking, drawing capabilities, and advanced workflows. Includes camera integration and AI model implementation for enhanced autonomous behaviors and intelligent obstacle detection.",
      ghLink: "https://github.com/LMathan/Finch2.0",
    },
    {
      imgPath: chatify,
      title: "CollaboBoard",
      stack: "React · Node.js · Express · MongoDB · Socket.IO",
      description:
        "A real-time collaborative task management platform with live updates, smart assignment logic, JWT authentication, and conflict-safe edits for distributed teams.",
      ghLink: "https://github.com/LMathan/CollaboBoard",
      demoLink: "https://collaboboard.onrender.com/",
    },
    {
      imgPath: bitsOfCode,
      title: "Drainage Leakage Monitor",
      stack: "ESP8266 · Flow Sensors · Blynk · Embedded C",
      description:
        "An IoT safety system for detecting pipeline leakage, auto-stopping motors, triggering on-site alerts, and pushing mobile notifications in real time.",
      ghLink: "https://github.com/LMathan/Drainage-Leakage-Monitor",
    },
    {
      imgPath: editor,
      title: "ESP32-CAM Motion Telegram Alert",
      stack: "ESP32-CAM · PIR Sensor · Telegram Bot API",
      description:
        "A compact surveillance pipeline that detects movement, captures images, and sends immediate Telegram alerts for low-cost remote monitoring.",
      ghLink: "https://github.com/LMathan/ESP32-CAM-Motion-Telegram",
    },
    {
      imgPath: leaf,
      title: "Smart Health Monitor",
      stack: "ESP8266 · DHT22 · Flask · Realtime Telemetry",
      description:
        "A connected health prototype that simulates ECG, computes BPM, captures environmental metrics, and streams data to a Flask dashboard every 2 seconds.",
      ghLink: "https://github.com/LMathan/SmartAmbulanceNet",
    },
    {
      imgPath: suicide,
      title: "Smart Bus Tracker",
      stack: "Arduino · GPS · ESP8266 · Flask",
      description:
        "Live public transport monitoring with bus location and seat occupancy updates delivered to a map-based web interface for commuters.",
      ghLink: "https://github.com/LMathan/TrackMyRide-Smart-Bus-Control",
    },
    {
      imgPath: emotion,
      title: "Emotion Detection with CNN",
      stack: "TensorFlow · Keras · OpenCV",
      description:
        "A computer vision pipeline trained on FER-2013 to classify facial emotions and run real-time face detection with model-based inference.",
      ghLink: "https://github.com/LMathan",
    },
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p className="section-subtitle">
          A mix of full-stack products and embedded IoT implementations focused
          on real usability, maintainability, and rapid delivery.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                stack={project.stack}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
