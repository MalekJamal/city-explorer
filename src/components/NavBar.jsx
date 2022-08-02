import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
class NavBar extends Component {
    render() {
        return (
            <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    
    </>
        );
    }
}

export default NavBar;