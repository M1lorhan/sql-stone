import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar sticky="top" expand="xl" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>Visionary Optical</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item 
                as={Link} 
                to='/glasses' 
                aria-label="View our Glasses collection"
              >
                Glasses
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to='/glasses/Sun' 
                aria-label="View our Sunglasses collection"
              >
                Sunglasses
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to='/glasses/Smart' 
                aria-label="View our Smart Glasses collection"
              >
                Smart Glasses
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to='/glasses/AI-Enabled' 
                aria-label="View our AI Enabled Glasses collection"
              >
                AI Enabled Glasses
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to='/glasses/Augmented-Reality' 
                aria-label="View our Augmented Reality Glasses collection"
              >
                Augmented Reality Glasses
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to='/glasses/Heads-Up-Display' 
                aria-label="View our Heads-Up-Display Glasses collection"
              >
                Heads-Up-Display Glasses
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link 
              as={Link} 
              to='/signup' 
              aria-label="Sign up for an account"
            >
              Sign Up
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to='/login' 
              aria-label="Log in to your account"
            >
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
