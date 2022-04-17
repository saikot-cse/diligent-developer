import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">
            <span className="text-warning">Diligate Developer</span>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-5 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} className="text-white" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-white" to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} className="text-white" to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} className="text-white" to="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <button className="bg-dark text-white border-0" onClick={() => signOut(auth)}>Log Out</button>
              ) : (
                <Nav.Link as={Link} className="text-white" to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
