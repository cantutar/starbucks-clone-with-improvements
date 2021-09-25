import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import mainLogo from "./images/logo.svg";
import "./css/style.css";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" variant="white" className="shadow-sm">
          <Container className="py-3">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={mainLogo}
                width="51"
                height="51"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="me-auto Navi">
              <Nav.Link className="t-color" href="#home">
                MENU
              </Nav.Link>
              <Nav.Link className="t-color" href="#features">
                REWARDS
              </Nav.Link>
              <Nav.Link className="t-color" href="#pricing">
                GIFT CARDS
              </Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link className="t-color">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/marker.png"
                  alt=""
                  srcset=""
                  width="20px"
                  height="20px"
                />
                Find a Store
              </Nav.Link>
              <Nav.Link className="button-beyaz me-2">Sign in</Nav.Link>
              <Nav.Link className="button-siyah">Join now</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
