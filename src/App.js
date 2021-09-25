// import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navi from "./Navi";
import { Helmet } from "react-helmet";

const Homepage = require("./util/Homepage.json");

function App() {
  return (
    <div>
      <Helmet>
        <title>{Homepage.pageTitle}</title>
        <meta name="description"></meta>
      </Helmet>
      <Navi />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
