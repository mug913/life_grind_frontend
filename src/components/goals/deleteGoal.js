import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../../actions/goalActions'

class DeleteGoal extends Component {

    handleOnClick = () => {
        this.props.deleteGoal(this.props.goal_id)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}> Delete Goal </button>
            </div>
        );
    }
}

export default connect(null,{deleteGoal})(DeleteGoal);
