import React, { Component } from 'react';

class Goal extends Component {

  handleOnClick = () => {
    this.props.deleteGoal(this.props.goal.id)
  }


  render() {
    const { goal } = this.props;

    return (
      <div>
        <li>
          {goal.name}
          <button onClick={this.handleOnClick}> X </button>
         </li>
      </div>
    );
  }
};

export default Goal;
