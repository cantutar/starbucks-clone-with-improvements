import logo from "./images/logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navi from "./components/Navi";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";
import Gifts from "./components/Gifts";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gift" component={Gifts} />
        <Route path="/rewards" component={Rewards} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
