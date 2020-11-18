import React, { Component } from 'react';
//import NewRecord from './newRecord';

class Record extends Component {

   displayFields = (record,field_number) =>{
    let i = 0
    let allFields = []   
    while (i < field_number) {
        let name = record[`field_${i+1}_name`]
        let data = record[`field_${i+1}_data`]
         ++i
         console.log(allFields)
        allFields.push(`${name}: ${data}`)
    }
    console.log(allFields)
        return allFields.map((f) => <li>{f}</li>)
    }

  render() {
  
    const records = this.props.records
    const field_number = this.props.field_number
  
    return (
     
        <div>
        {this.props.records.date}
        {this.displayFields(records,field_number)}
           </div>
    );
    }
    
};

export default Record;
