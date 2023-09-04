import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <header className="position-relative ">
        <Navbar bg="danger" data-bs-theme="dark">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand href="#home">Tienda Gamer</Navbar.Brand>
            <Nav className="d-flex  mx-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#Productos">Productos</Nav.Link>
              <Nav.Link href="#Nosotros">Nosotros</Nav.Link>  
              <Nav.Link href="#Cart">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default NavBar;
