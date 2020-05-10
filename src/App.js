import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "./pages/landing/landing.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
};

export default App;
