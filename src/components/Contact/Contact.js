import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import Particle from "../Particle";

function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [fallbackUsed, setFallbackUsed] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_py4sdfi";
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_wo1n6rh";
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "U4maMA3naUmTrQtcy";

  const openMailClientFallback = (name, email, message) => {
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:mathanl1434@gmail.com?subject=${subject}&body=${body}`;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setFallbackUsed(false);
      formRef.current.reset();
    } catch (err) {
      setSent(false);
      setFallbackUsed(true);
      openMailClientFallback(name, email, message);
    }
  };

  return (
    <Container fluid className="resume-section" id="contact">
      <Particle />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <p className="section-kicker text-center">Contact</p>
        <h1 className="project-heading text-center mb-4">
          Let&apos;s Build Something <span className="purple">Great</span>
        </h1>
        <p className="section-subtitle text-center mb-5">
          Tell me about your product idea, existing system, or IoT requirement.
          I typically respond within 24 hours.
        </p>

        <Row className="d-flex align-items-center justify-content-center flex-wrap-reverse">
          <Col
            md={5}
            className="contact-info mb-5 mb-md-0 d-flex flex-column align-items-start contact-shell"
          >
            <h3 className="mb-3">Contact Details</h3>
            <p>
              <FaPhoneAlt className="purple me-2" /> +91 80124 39202
            </p>
            <p>
              <AiOutlineMail className="purple me-2" /> mathanl1434@gmail.com
            </p>

            <h4 className="mt-4">Find Me On</h4>
            <div className="d-flex gap-4 mt-2">
              <a
                href="https://github.com/LMathan"
                target="_blank"
                rel="noreferrer"
                className="icon-colour contact-icons"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="http://www.linkedin.com/in/mathan-l-38199a27a"
                target="_blank"
                rel="noreferrer"
                className="icon-colour contact-icons"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="mailto:mathanl1434@gmail.com"
                className="icon-colour contact-icons"
              >
                <AiOutlineMail size={30} />
              </a>
            </div>

            <p className="mt-4 mb-0">
              Preferred project types: SaaS MVPs, admin dashboards, automation,
              embedded monitoring systems, and web-integrated IoT products.
            </p>
          </Col>

          <Col md={6}>
            <div className="p-4 bg-contact-form">
              <Form ref={formRef} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Type your message..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Project Inquiry
                </Button>

                {sent && (
                  <Alert variant="success" className="mt-3">
                    Message sent successfully!
                  </Alert>
                )}
                {fallbackUsed && (
                  <Alert variant="warning" className="mt-3">
                    Email service is temporarily unavailable. Your mail app was opened so you can send the message directly.
                  </Alert>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
