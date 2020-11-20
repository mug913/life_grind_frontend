import React, { Component } from 'react';
import { connect } from 'react-redux'
import Record from '../components/records/record'

class RecordsContainer extends Component {

    recordDisplay = (record, field_number) => {
        if(!!(record)){
           return <Record record={record} field_number={field_number} goal_position={this.props.goal_position}/>
        }
        return null
    }

    render() {
       
       
        const records = this.props.records[this.props.goal_position]
        console.log(`records${records}`)
        return (
        <div>
            {this.recordDisplay(records[records.length-1], this.props.field_number)}
       
        </div>
    )}
}
  

const mapStateToProps = (state) => {
  return {
    records: state.recordsReducer.goal_records
 }
}

export default connect(mapStateToProps)(RecordsContainer);