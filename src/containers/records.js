import React, { Component } from 'react';
import { connect } from 'react-redux'
import Record from '../components/records/record'

class RecordsContainer extends Component {

    recordDisplay = (record, field_number) => {
        if(!!record){
        return <Record records={record[0]} field_number={field_number}/>
        }
        return null
    }

    render() {
      return (
        <div>
           {this.recordDisplay(this.props.records[this.props.position], this.props.field_number)}
        </div>
      )
      }
}
  

const mapStateToProps = (state) => {
  return {
    records: state.recordsReducer.goal_records
   }
}

export default connect(mapStateToProps)(RecordsContainer);