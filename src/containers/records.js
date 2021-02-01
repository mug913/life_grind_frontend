import React, { Component } from 'react';
import { connect } from 'react-redux'
import Record from '../components/records/record'
import BackButton from '../components/records/backButton.js'
import ForwardButton from '../components/records/forwardButton.js'

class RecordsContainer extends Component {

    state = {position: this.props.records[this.props.goal_position].length-1}
    
    recordDisplay = (record, field_number) => {
        if(!!(record)){
           return <Record record={record} field_number={field_number} goal_position={this.props.goal_position}/>
        }
        return null
    }

    backButton = () =>{
        console.log(this.state.position)
        this.setState(state => ({position: state.position-1}))
    }    

    forwardButton = () =>{
        console.log(this.state.position)
        this.setState(state => ({position: state.position+1}))
    }   

    render(){
        const records = this.props.records[this.props.goal_position]
        
        let backButton
        if (this.state.position >= 1) {
            backButton = <BackButton back={this.backButton}/>
        } else { backButton = null}
        
        let forwardButton
        if (this.state.position < records.length-1)  {
            forwardButton = <ForwardButton forward={this.forwardButton}/>
        } else { forwardButton = null}
        
        return (
        <div>
            {this.recordDisplay(records[this.state.position], this.props.field_number)}
            {backButton}
            {forwardButton}
        </div>
    )}
}
  

const mapStateToProps = (state) => {
  return {
    records: state.recordsReducer.goal_records
 }
}

export default connect(mapStateToProps)(RecordsContainer);