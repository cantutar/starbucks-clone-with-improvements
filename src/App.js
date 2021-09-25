// import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navi from "./Navi";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const Homepage = require("./util/Homepage.json");

function App() {
  return (
    <div>
      <Helmet>
        <title>{Homepage.pageTitle}</title>
        <meta name="description"></meta>
      </Helmet>
      <Navi />
      <Footer />
    </div>
  );
}

export default App;
