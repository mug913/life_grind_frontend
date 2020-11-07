import React from 'react';
import LoginForm from './components/users/login'
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="App">
        <LoginForm />
      </div>
    )
  }
}

export default App;
