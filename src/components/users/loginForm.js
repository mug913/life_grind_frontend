import React, { useState } from 'react'
import { connect } from 'react-redux';
import { loginUser} from '../../actions/userActions'
import { withRouter } from 'react-router-dom'
import {useAppContext} from "../../libs/contextLib"
import {useHistory} from 'react-router-dom'


 function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }

async function handleSubmit(event) {
    event.preventDefault()
    try {
        let response = await props.loginUser({email, password})
        userHasAuthenticated(true);
        history.push("/home")
    }catch (e) {
        alert("Incorrect LogIn Information")
    }
  }

         
  return(
    <div className="LoginForm">
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <input type="submit" disabled={!validateForm()} />
                </form>
            </div>
        )
}

export default withRouter(connect(null,{loginUser})(LoginForm));