import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
          <Nav.Link><Link to="/About" className="nav-link">About</Link></Nav.Link>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
