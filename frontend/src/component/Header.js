import React from "react";
import { LinkContainer } from "react-router-bootstrap"
import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"

import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >PROSHOP</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link >
                  <IoMdCart size="1.3em" style={{ marginRight: 3 }} />
              Cart
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link >
                  <FaUserCircle size="1.3em" style={{ marginRight: 3 }} />
                Sign In
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
