import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CollaboBoard - Real-Time Collaborative Task Management"
              
              description="Built a full-stack Kanban board using React, Node.js, Express, and MongoDB. Enabled real-time task sync with Socket.IO, Smart Assign for balanced task distribution, and conflict handling for simultaneous edits. Included JWT-based auth and a responsive, drag-and-drop UI with custom styling."
              ghLink="https://github.com/LMathan/CollaboBoard"
              demoLink="https://collaboboard.onrender.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Drainage-Leakage-Monitor"
              description="Drainage Leakage Monitor detects pipeline leaks using ESP8266, flow sensors, and Blynk. It auto-stops the motor, triggers alerts via buzzer and LCD, and sends real-time notifications to the Blynk app. 🚰⚠️"
              ghLink="https://github.com/LMathan/Drainage-Leakage-Monitor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ESP32-CAM-Motion-Telegram"
              description="It uses ESP32-CAM and a PIR sensor to detect motion and capture images. It sends real-time alerts with images via Telegram, ensuring smart security monitoring. Ideal for home surveillance and automation with Wi-Fi connectivity. 📸⚠️🚀"
              ghLink="https://github.com/LMathan/ESP32-CAM-Motion-Telegram"
              
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Smart Health Monitor"
              description="I built a real-time health monitoring system using ESP8266 that simulates ECG signals (10–800 range), calculates BPM, and reads temperature and humidity from a DHT22 sensor. Data is sent every 2 seconds to a Flask server for visualization, showcasing my skills in IoT, sensor integration, and HTTP communication."
              ghLink="https://github.com/LMathan/SmartAmbulanceNet"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Smart Bus Tracker"
              description="Smart Bus Tracker is an IoT-based mini project that monitors live bus location and seat availability in real-time. It uses an Arduino with a GPS module and two FSR402 sensors to detect the bus's position and seat occupancy, and sends this data via serial to an ESP8266. The ESP8266 connects to WiFi and uploads the data to a Flask web server hosted on a laptop. The website displays the bus's live location on a map and seat status using a user-friendly interface, helping commuters track buses effectively. This low-cost solution is ideal for smart public transport systems."
              ghLink="https://github.com/LMathan/TrackMyRide-Smart-Bus-Control"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
