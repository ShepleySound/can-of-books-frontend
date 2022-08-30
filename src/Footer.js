import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Shepley &amp; Ge</Navbar.Brand>
        </Navbar>
      </footer>
    )
  }
}

export default Footer;
