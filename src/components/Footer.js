import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Conçu et développé par Soda DIOP</h3>
        </Col>

        <Col md="4" className="footer-copywright footer-contact">
          <h3>Me contacter</h3>
          <ul className="footer-contact-list">
            <li>
              <a
                href="mailto:soda.diop@email.com"
                style={{ color: "#c084f5", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail style={{ marginRight: "6px", verticalAlign: "middle" }} />
diopsoda1812@gmail.com              </a>
            </li>
            <li>
              <a
                href="tel:+221771234567"
                style={{ color: "#c084f5", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiPhone style={{ marginRight: "6px", verticalAlign: "middle" }} />
                +221 78 529 36 32
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soda-diop-1a0235282/"
                style={{ color: "#c084f5", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{ marginRight: "6px", verticalAlign: "middle" }} />
                LinkedIn
              </a>
            </li>
          </ul>
        </Col>

        <Col md="4" className="footer-body">
          <h3>Copyright © {year} Soda DIOP</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/DIOP18"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soda-diop-1a0235282/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
