import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return(  
  <Navbar sticky="top" width="100%" expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href='/'>Visionary Optical</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sunglasses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Smart GLasses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">AI Enabled Glasses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Augmented Reality Glasses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Heads-Up-Display Glasses</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/signup'>Sign Up</Nav.Link>
              <Nav.Link href='/login'>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Navigation;
