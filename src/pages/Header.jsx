import React from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { FaHeart, FaSearch, FaPlaceOfWorship } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Header({ ishome }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", minHeight: "70px" }} variant="dark">
      <Container fluid className="px-4">
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white d-flex align-items-center">
          <FaPlaceOfWorship className="me-3" size={25} />
          Travel Bucket List
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
        <Navbar.Collapse id="navbar-nav">
          {/* Search Bar (Only on Home Page) */}
          {ishome && (
            <Form className="d-flex mx-auto my-2 my-lg-0" style={{ width: "40%" }}>
              <Form.Control
                type="search"
                placeholder="Search places..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success" className="text-white">
                <FaSearch />
              </Button>
            </Form>
          )}

          {/* Navigation Links */}
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/home" className="text-white nav-item-custom">
              Places
            </Nav.Link>
            <Nav.Link as={Link} to="/create" className="text-white nav-item-custom">
              Add Place
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
