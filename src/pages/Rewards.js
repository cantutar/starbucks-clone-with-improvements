import React, { Component } from "react";
import { Alert, Container } from "react-bootstrap";

export default class Rewards extends Component {
  render() {
    return (
      <Container>
        <Alert className="flex justify-center text-center" variant="danger">
          Following CDC guidance, facial coverings are recommended in our stores
          for all customers, and are required where mandated by local law.
        </Alert>
      </Container>
    );
  }
}
