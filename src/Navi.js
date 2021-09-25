import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import mainLogo from "./images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";
import "./css/style.css";
import Home from "./Home";
import Rewards from "./Rewards";
import NotFound from "./NotFound";
import Gifts from "./Gifts";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" variant="white" className="shadow-sm">
          <Container className="py-3">
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src={mainLogo}
                width="51"
                height="51"
                className="d-inline-block align-top me-3"
              />
            </Navbar.Brand>
            <Nav className="me-auto Navi">
              <Nav.Link className="t-color" as={Link} to="/Menu">
                MENU
              </Nav.Link>
              <Nav.Link className="t-color" as={Link} to="/rewards">
                REWARDS
              </Nav.Link>
              <Nav.Link className="t-color" as={Link} to="/gift">
                GIFT CARDS
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link className="t-color me-5">
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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gift">
            <Gifts />
          </Route>
          <Route path="/rewards" component={Rewards} />

          <Route component={NotFound}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}
