import React, { Component } from 'react'
import { connect } from 'react-redux';

class RecordEntryFields extends Component {

   

handleChange = (field,event) => {
  this.props.handleFieldChange(field,this.props.number,event)
 };


handleSubmit = (event) => {
    event.preventDefault()
       this.props.addGoal(this.state)
}

render() {
    return(
        <div>
            <form >
                <label>{this.props.records[0].[`field_${number}_name]`}:</label>
                <input type="text" onChange={this.handleChange.bind(this, 'data')} />          
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      goal: state.goalsReducer.user_goals[ownProps.goal_position],
      records: state.recordsReducer.goal_records[ownProps.goal_position]
     }
}

export default connect(mapStateToProps)(RecordEntryFields);
