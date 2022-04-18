import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }
  if(error){
    return ;
  }
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <span className="text-warning">Diligent Developer</span>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-warning" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-lg-0 d-flex align-items-center" style={{ maxHeight: "100px" }} navbarScroll>
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
                <button className="bg-dark text-white border-0" onClick={() => signOut(auth)}>
                  Log Out
                </button>
              ) : (
                <Nav.Link as={Link} className="text-white" to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            <p className="text-warning mt-3 ms-2 text-center">{user ? (user.displayName) : ""}</p>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
