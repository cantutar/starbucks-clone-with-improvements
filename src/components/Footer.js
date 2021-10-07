import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/style.css";
import footerLogo from "../images/wordmark_footer_tcm95-397.png";

export default class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer-bg">
        <Container>
          <footer className="py-5">
            <div className="row">
              <div className="col-md-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link href="/home" className="nav-link p-0 text-muted">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/home" className="nav-link p-0 text-muted">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <div className="d-flex justify-content-end">
                  <img src={footerLogo} alt="footer logo" width="15em" />
                </div>
              </div>
              {/* row  bitişi*/}
            </div>
            <hr />
            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>© 2021 Starbucks Coffee Company. Tüm hakları saklıdır.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="/home">
                    <svg className="bi" width="24" height="24">
                      <use href="/hometwitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="/home">
                    <svg className="bi" width="24" height="24">
                      <use href="/homeinstagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="link-dark"
                    href="https://www.linkedin.com/in/can-tutar-61b6a31b9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    // className="link-dark"
                    href="https://github.com/cantutar"
                    target="_blank"
                    rel="noreferrer"
                    className="img-fluid"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/github.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </Container>
      </Container>
    );
  }
}

// https://github.com/cantutar
