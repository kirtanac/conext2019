import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';

class NavigationBar extends React.Component {

render() {

        const appNavbar = (
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/about">Co-Next 2020</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">

                    <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
                    <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
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
