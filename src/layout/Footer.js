import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Shepley &amp; Ge</Navbar.Brand>
        </Navbar>
      </footer>
    )
  }
}

export default Footer;
