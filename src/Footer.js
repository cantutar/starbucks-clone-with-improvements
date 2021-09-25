import React, { Component } from "react";
import { Container } from "react-bootstrap";
import footerLogo from "../src/images/wordmark_footer_tcm95-397.png";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <footer class="py-5">
          <div class="row">
            <div class="col-md-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="/home" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="inline-block d-flex justify-content-end">
                <img src={footerLogo} alt="footer logo" width="15em" />
              </div>
            </div>
            {/* row  bitişi*/}
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-dark" href="/home">
                  <svg class="bi" width="24" height="24">
                    <use href="/hometwitter"></use>
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="/home">
                  <svg class="bi" width="24" height="24">
                    <use href="/homeinstagram"></use>
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="/home">
                  <svg class="bi" width="24" height="24">
                    <use href="/homefacebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    );
  }
}
