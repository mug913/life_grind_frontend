import React from 'react';
import './App.css';
import { Component } from 'react';
import UsersContainer from './containers/usersContainer';

class App extends Component {
  render() {
    return(
      <div className="App">
        <UsersContainer/>
      </div>
    )
  }
}

export default App;
