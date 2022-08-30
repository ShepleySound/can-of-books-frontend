import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";
import './Header.css';
// import { NavLink } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About" className="nav-link">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
