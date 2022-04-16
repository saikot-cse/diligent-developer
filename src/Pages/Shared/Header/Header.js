import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className='d-flex'>
        <Container>
          <Navbar.Brand href="#">
            <img style={{height: '50px'}} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-5 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} className='text-white' to="/">Home</Nav.Link>
              <Nav.Link as={Link} className='text-white' to="/services">Services</Nav.Link>
              <Nav.Link as={Link} className='text-white' to="/about">About</Nav.Link>
              <Nav.Link as={Link} className='text-white' to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;