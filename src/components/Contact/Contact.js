import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import Particle from "../Particle"; // ✅ Required for background particles

function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_py4sdfi",       // ✅ Your EmailJS service ID
        "template_wo1n6rh",      // ✅ Your EmailJS template ID
        formRef.current,
        "U4maMA3naUmTrQtcy"      // ✅ Your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          setError(false);
          formRef.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <Container fluid className="resume-section">
      <Particle /> {/* ✅ Background effect */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <h1 className="purple text-center mb-5">
          Let's <strong>Connect</strong>
        </h1>

        <Row className="d-flex align-items-center justify-content-center flex-wrap-reverse">
          {/* LEFT: Contact Info */}
          <Col
            md={5}
            className="text-white contact-info mb-5 mb-md-0 d-flex flex-column align-items-start"
          >
            <h3 className="purple mb-3">Contact Info</h3>
            <p>
              <FaPhoneAlt className="purple me-2" /> +91-8012439202
            </p>
            <p>
              <AiOutlineMail className="purple me-2" /> mathanl1434@gmail.com
            </p>

            <h4 className="purple mt-4">Find me on</h4>
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
                href="https://www.instagram.com/mathan__3007?igsh=a3N6c3YxMWQ3ejQx"
                target="_blank"
                rel="noreferrer"
                className="icon-colour contact-icons"
              >
                <AiFillInstagram size={30} />
              </a>
            </div>
          </Col>

          {/* RIGHT: Contact Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-dark text-light shadow-lg"
              style={{ border: "1px solid #6c63ff" }}
            >
              <Form ref={formRef} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Label className="purple">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="purple">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="purple">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Type your message..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>

                {sent && (
                  <Alert variant="success" className="mt-3">
                    Message sent successfully!
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger" className="mt-3">
                    Failed to send message. Try again later.
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
