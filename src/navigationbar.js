import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';

class NavigationBar extends React.Component {

render() {

        const appNavbar = (
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/about">Co-Next 2019</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">

                    <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
                    <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                    <NavDropdown title="Resume Tips" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Tips and Tricks</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Resume Samples</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Additional Resources</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/faqs">FAQs</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
        );

    return (
    <div>
      {appNavbar}
    </div>
    );
  }
}

export default NavigationBar;
