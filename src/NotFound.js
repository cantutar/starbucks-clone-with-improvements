import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./images/logo_tcm95-366_w1024_n.png";
import "./css/style.css";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Container className="py-5">
          <img src={logo} className="img-fluid d-block mx-auto" alt="" />
          <h1 className="display-1 text-center d-block">Whoops!</h1>
          <div className="col-md-12">
            <h1>We’re sorry – we can’t find the page you’re looking for.</h1>
            <p>
              <strong>What could have caused this?</strong>
            </p>
            <p>
              Well, we might have removed the page when we redesigned our
              website.
            </p>
            <p>
              Or the link you clicked might be old and does not work anymore.
            </p>
            <p>
              Or you might have accidentally typed the wrong URL in the address
              bar.
            </p>
            <h3>What you can do</h3>
            <p>You might try retyping the URL.</p>
            <p>
              Or we could take you back to the{" "}
              <Link className="link-color" as={Link} to="/">
                Starbucks home page
              </Link>
            </p>
            <p>
              Or you could use the{" "}
              <Link className="link-color" as={Link} to="/sitemap">
                site map
              </Link>{" "}
              to find what you’re looking for.
            </p>
            <strong>One more thing:</strong>
            <p className="pb-5">
              If you want to tell us about broken links or send in your general
              comments about Starbucks.com,&nbsp;
              <Link
                className="link-color"
                href="https://customerservice.starbucks.com/app/contact/ask_starbucks_website/"
              >
                please let us know.
              </Link>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
