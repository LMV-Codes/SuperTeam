import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
