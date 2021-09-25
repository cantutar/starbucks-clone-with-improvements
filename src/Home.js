import React, { Component } from "react";
import { Alert, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Alert
          className="flex justify-center text-center uyari"
          variant="success"
        >
          Following CDC guidance, facial coverings are recommended in our stores
          for all customers, and are required where mandated by local law.
          <a href="/covid">Learn More</a>
        </Alert>
      </Container>
    );
  }
}
