import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const CustomNavbar = () => {
  const { logout, user } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/nebula">
          Task Buddy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link as={Link} to="/CreateForm">
                  Create Task
                </Nav.Link>
                <Nav.Link as={Link} to="/nebula">
                  Task Details
                </Nav.Link>
              </>
            )}
          </Nav>

          {user ? (
            <Button variant="outline-danger" onClick={logoutHandler}>
              Logout
            </Button>
          ) : (
            <Nav.Link as={Link} to="/auth">
              Auth
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
