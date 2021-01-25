import React, { Component } from 'react';
import AddRecordForm from './addRecordForm'

class Record extends Component {

    state = {showForm:false}   
         

   displayFields = (record,field_number) =>{
    let i = 0
    let allFields = []   
    while (i < field_number) {
        let name = record[`field_${i+1}_name`]
        let data = record[`field_${i+1}_data`]
         ++i
        allFields.push(`${name}: ${data}`)
    }
        return allFields.map((f) => <ul>{f}</ul>)
    }

    handleOnClick = () => {
        this.setState(state => ({
          showForm: !state.showForm}))
      }
    formOff = () => {
        this.setState(state => ({
            showForm: !state.showForm}))
      }
    

    formDisplay = () => {
        if (this.state.showForm) {
          return <AddRecordForm goal_position={this.props.goal_position} formOff={this.formOff}/>;
          }
          return null;
        }

    dateFormat = (dateTime) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(dateTime).toLocaleDateString([], options)
    }

  render() {
    const record = this.props.record
    const field_number = this.props.field_number
    const displayDate = this.props.record.created_at
    return (
        <div>
            {`Last Update: ${this.dateFormat(displayDate)}`}
            {this.displayFields(record,field_number)}
            <div>
                <input type="button" onClick={this.handleOnClick} value="Add Record Entry" />
                {this.formDisplay()}
            </div>
        </div>

    );
    }
    
};

export default Record;
