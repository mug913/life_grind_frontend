import React from "react";
import { Component } from 'react';
import { Link } from "react-router-dom";
import RegisterContainer from '../../containers/register';
import './register.css'

class Register extends Component {
    render() {
      return(
        <div>
        <div className="Register">
          <RegisterContainer/>
        </div>
        <button className="btn-link">
            <Link to="/">Cancel</Link>
        </button>
        </div>
      )
    }
  }
  
export default Register;