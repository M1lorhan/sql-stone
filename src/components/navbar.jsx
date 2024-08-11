import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function Navigation() {
  return(
        <Navbar sticky="top" expand="xl" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to='/'>Visionary Optical</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to='glasses'>glasses</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='glasses/1'>Sunglasses</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='glasses/2'>Smart Glasses</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='glasses/3'>AI Enabled Glasses</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='glasses/4'>Augmented Reality Glasses</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='glasses/5'>Heads-Up-Display Glasses</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
              <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Navigation;
