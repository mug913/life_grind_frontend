import React, { Component } from 'react';

class NewGoal extends Component {

  render() {
    return (
        <div>
          <button onClick={this.handleOnClick}> Create New Goal </button>
        </div>
    );
  }
}

export default NewGoal;
