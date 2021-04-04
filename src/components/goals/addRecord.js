import React, { Component } from 'react';
import AddRecordForm from '../records/addRecordForm'

//displays "add record" button underneath each goal with form toggle button

class AddRecord extends Component {
    state = {showForm:false}   
         

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

    render(){
        return(
            <div>
                <input type="button" onClick={this.handleOnClick} value="Add Record Entry" />
                {this.formDisplay()}
            </div>
        )
    }
}

export default AddRecord;