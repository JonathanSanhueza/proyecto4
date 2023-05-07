import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from '../assets/icono.ico'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img src={icono} height={24} style={{marginRight: 16}}/>Mukai Sushi</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">
              Inicio  
            </Nav.Link>
            <Nav.Link href="About">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="Menu">
              Menu
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};


export default NavBar