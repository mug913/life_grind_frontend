import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addRecord } from '../../actions/recordActions'
import RecordEntryFields from './recordEntryFields'


class AddRecordForm extends Component {

    constructor(props){
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this) 
        const recordZero = this.props.records[0]
        this.state = {
            goal_record: {
                date: null,
                field_1_name: recordZero.field_1_name,
                field_1_type: recordZero.field_1_type,
                field_1_data: null,
                field_2_name: recordZero.field_2_name,
                field_2_type: recordZero.field_2_type,
                field_2_data: null,
                field_3_name: recordZero.field_3_name,
                field_3_type: recordZero.field_3_type,
                field_3_data: null}
            };
    }



handleFieldChange = (number, event) => {
    let today = new Date()
    let finalDate = `${today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDay() + 'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()}`
    this.setState({...this.state, goal_record: {
        ...this.state.goal_record,
        date: finalDate,
        [`field_${number}_data`]: event.target.value
}})};

handleSubmit = event => {
    event.preventDefault()
    this.props.addRecord(this.props.goal.user_id, this.props.goal, this.state)
 }

render() {
    const fields = [];
    for (let i = 0; i < this.props.goal.field_number; i++) {
        fields.push(
        <RecordEntryFields number={`${i+1}`} handleFieldChange={this.handleFieldChange} goal_position={this.props.goal_position}/>
        )}
    return(
        <div>
            <form onSubmit={this.handleSubmit}>>
                {fields}
                <input type="submit" />
            </form>
        </div>        
        )
    }
}


const mapStateToProps = (state,ownProps) => {
    return {
      goal: state.goalsReducer.user_goals[ownProps.goal_position],
      records: state.recordsReducer.goal_records[ownProps.goal_position]
     }
}

export default connect(mapStateToProps,{addRecord})(AddRecordForm);
