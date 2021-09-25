import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>We’re sorry – we can’t find the page you’re looking for.</h1>
          <p>
            <strong>What could have caused this?</strong>
          </p>
          <p>
            Well, we might have removed the page when we redesigned our website.
          </p>
          <p>Or the link you clicked might be old and does not work anymore.</p>
          <p>
            Or you might have accidentally typed the wrong URL in the address
            bar.
          </p>
          <h3>What you can do</h3>
          <p>You might try retyping the URL.</p>
          <p>
            Or we could take you back to the <a href="/">Starbucks home page</a>
          </p>
          <p>
            Or you could use the <a href="/site-map">site map</a> to find what
            you’re looking for.
          </p>
          <strong>One more thing:</strong>
        </Container>
      </div>
    );
  }
}
