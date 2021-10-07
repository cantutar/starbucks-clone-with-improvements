import logo from "./images/logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navi from "./components/Navi";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";

const Homepage = require("./util/Homepage.json");

function App() {
  return (
    <div>
      <Helmet>
        <title>{Homepage.pageTitle}</title>
        <meta name="description"></meta>
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
      <Navi />
      <Footer />
    </div>
  );
}

export default App;
