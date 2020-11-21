import React from "react";
import { Component } from 'react';
import { Link } from "react-router-dom";
import LoginContainer from '../../containers/login';
import './login.css'

class Login extends Component {
    render() {
      return(
        <div>
        <div className="Login">
          <LoginContainer/>
        </div>
        <button className="btn-link">
            <Link to="/register">Register</Link>
        </button>
        </div>
      )
    }
  }
  
export default Login;