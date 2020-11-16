import React, { Component } from 'react';
import NewGoalForm from './newGoalForm'

class NewGoal extends Component {
  state = {showForm:false}

  handleOnClick = () => {
    this.setState(state => ({
      showForm: !state.showForm}))
  }

  formDisplay = () => {
    if (this.state.showForm) {
      return <NewGoalForm />;
      }
      return null;
    }

  render() {
    return (
        <div>
          <button onClick={this.handleOnClick}> Create New Goal </button>
          {this.formDisplay()}
        </div>
    );
  }
}

export default NewGoal;
