import React, { Component } from "react";
import { Alert, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import pano1 from "./images/pc/hersey-seninle-baslar-web_tcm95-68011.png";
// import pano2 from "./images/pc/mevsimlerden-pumpkin-spice-latte-web_tcm95-73882.png";
// import pano3 from "./images/pc/affogato-ve-cold-brew-web-banner_tcm95-72855.png";
// import pano4 from "./images/pc/refresha-web-2400_tcm95-71138.png";
// import pano5 from "./images/pc/50-yil-web_tcm95-70056.png";

// import pano1Mobil from "module";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Alert
            className="flex justify-center text-center uyari"
            variant="success"
          >
            CDC yönergelerine uygun olarak, mağazalarımızda tüm müşterilerizin
            maske takmaları gerekmektedir.
            <a className="uyari" href="/covid">
              Daha fazla bilgi
            </a>
          </Alert>
        </Container>
        <div>
          <img className="pano1 pano1-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano2 pano2-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano3 pano3-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano4 pano4-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano5 pano5-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano6 pano6-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano7 pano7-mobil img-fluid" alt="" />
        </div>
        <div>
          <img className="pano8 pano8-mobil img-fluid" alt="" />
        </div>
      </div>
    );
  }
}
