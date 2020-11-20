import React, { Component } from 'react';
import AddRecordForm from './addRecordForm'

class Record extends Component {

    state = {showForm:false}   
         

   displayFields = (record,field_number) =>{
    let i = 0
    let allFields = []   
    console.log(`record: ${record}`)
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
    
      formDisplay = () => {
        if (this.state.showForm) {
          return <AddRecordForm goal_position={this.props.goal_position}/>;
          }
          return null;
        }

  render() {
    const record = this.props.record
    const field_number = this.props.field_number
    const displayDate = new Date(record.date)
    return (
        <div>
            {`Date Entered: ${displayDate.toDateString()}`}
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
