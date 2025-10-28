import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';



function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "50px 0 20px",
        marginTop: "auto",
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* About Section */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold text-success mb-3">Bucket List</h4>
            <p  style={{ lineHeight: "1.5", color: "#bbb" }}>
              Discover your next adventure with Bucket List — your travel and
              shopping companion. Explore, dream, and plan all in one place.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-success mb-3">Quick Links</h5>
            <ul className="list-unstyled" style={{ color: "#bbb" }}>
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/list" className="text-decoration-none text-light">Wishlist</a></li>
              <li><a href="/card" className="text-decoration-none text-light">card</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Contact + Socials */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-success mb-3">Contact</h5>
            <p className="mb-1" style={{ color: "#bbb" }}>bucketlist@gmail.com</p>
            <p className="mb-3" style={{ color: "#bbb" }}>+91 9068463698</p>

            <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-4">
              <a
                href="https://wa.me/9068463698"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: "#444" }} />

        {/* Bottom Credits */}
        <div className="text-center mt-3">
          <p
            style={{
              fontFamily: "Caveat, cursive",
              fontStyle: "italic",
              color: "#ccc",
            }}
          >
            Designed and built with <GiSelfLove color="red" /> using React
          </p>
          <p className="text-secondary" style={{ fontSize: "14px" }}>
            © {new Date().getFullYear()} Bucket List. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;