import React, { Component } from 'react';
import { connect } from 'react-redux'
import Record from '../components/records/record'

class RecordsContainer extends Component {

    recordDisplay = (record, field_number) => {
        console.log(`record:${!!(record)}`)
        console.log(`props.record${typeof record}`)
        if(!!(record)){
           return <Record record={record} field_number={field_number}/>
        }
        return null
    }

    render() {
       
       
        console.log(`pos${this.props.position}`)
        return (
        <div>
            {this.recordDisplay(this.props.records[this.props.position][0], this.props.field_number)}
        </div>
    )}
}
  

const mapStateToProps = (state) => {
  return {
    records: state.recordsReducer.goal_records
 }
}

export default connect(mapStateToProps)(RecordsContainer);