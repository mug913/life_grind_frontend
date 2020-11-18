import React, { Component } from 'react';

class Record extends Component {

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

  render() {
    const record = this.props.record
    const field_number = this.props.field_number
    const displayDate = new Date(record.date)
    return (
     
        <div>
        {`Date Entered: ${displayDate.toDateString()}`}
        {this.displayFields(record,field_number)}
        </div>
    );
    }
    
};

export default Record;
