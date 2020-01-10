import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import BashboardScreen from "./screens/BashboardScreen";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginScreen />
        </Route>
        <Route path="/dashboard" exact>
          <BashboardScreen />
        </Route>
      </Switch>
    </Router>
  );
}
