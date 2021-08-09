import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fs-1 mt-4 fw-bold">
            Crud With Database
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className="fs-1 me-5"
                style={{
                  paddingLeft: 13,
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Home
              </Link>
              <Link
                to="/addemployee"
                className="fs-1"
                style={{
                  paddingLeft: 13,
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Add Employee
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Home;
