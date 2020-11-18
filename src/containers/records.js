import React, { Component } from 'react';
import { connect } from 'react-redux'
import Record from '../components/records/record'

class RecordsContainer extends Component {

    render() {
      return (
        <div>
           <Record goals={this.props.record}/>
        </div>
      )
      }
}
  

const mapStateToProps = state => {
  return {
    record: state.recordsReducer.goal_record
   }
}

export default connect(mapStateToProps)(RecordsContainer);