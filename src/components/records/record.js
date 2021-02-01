import React, { Component } from 'react';


class Record extends Component {

    dateFormat = (dateTime) => {
       const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(dateTime).toLocaleDateString([], options)
    }

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

  render() {
    const record = this.props.record
    const field_number = this.props.field_number
    const displayDate = this.props.record.created_at
    return (
        <div class="Record">
            {`Last Update: ${this.dateFormat(displayDate)}`}
            {this.displayFields(record,field_number)}
        </div>
    );
    }
    
};

export default Record;
