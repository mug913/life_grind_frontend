import React, { Component } from 'react'
import { connect } from 'react-redux';

class RecordEntryFields extends Component {

   

handleChange = (event) => {
  this.props.handleFieldChange(this.props.number, event)
 };

render() {
    const recordZero = this.props.records[0]
    const data = [recordZero.field_1_name ,recordZero.field_2_name ,recordZero.field_3_name]
    return(
        <div>
            <form >
                <label>{data[this.props.number-1]}:</label>
                <input type="text" onChange={this.handleChange.bind(this)} />          
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
