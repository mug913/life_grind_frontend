import React, {useState} from "react";
import { Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import { AppContext } from "./libs/contextLib"
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Error from "./pages/error/error";


function Routes(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  
  return( <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated}} >
  <Router {...props}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        {props.user_id === "" ? <Login/> : <Home />}
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
   </Router>
   
  </AppContext.Provider>)
};


const mapStateToProps = (state) => {
  return {
    user_id: state.usersReducer.user_id
 }
}

export default connect(mapStateToProps)(Routes);