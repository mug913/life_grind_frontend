import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return(
            <div>
                <form>
                    <p>
                        <label>Login</label>
                        <input type="username" />
                    </p>
                        <imput type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginForm;