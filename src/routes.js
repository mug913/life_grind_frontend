import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
);
export default Routes;