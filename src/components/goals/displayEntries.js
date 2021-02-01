import React, { Component } from 'react';
import RecordsContainer from '../../containers/records'

//displays "show entries" button underneath each goal record entry toggle

class DisplayEntries extends Component {
    state = {showEntry:false}   
         

    handleOnClick = () => {
        this.setState(state => ({
        showEntry: !state.showEntry}))
    }
 
    entryOff = () => {
        this.setState(state => ({
        showEntry: !state.showEntry}))
    }
 

    EntryDisplay = () => {
        if (this.state.showEntry) {
            return <RecordsContainer goal_position={this.props.goal_position} field_number={this.props.field_number} entryOff={this.entryOff}/>;
        }
        return null;
    }

    render(){
        return(
            <div>
                <input type="button" onClick={this.handleOnClick} value="Show Entries" />
                {this.EntryDisplay()}
            </div>
        )
    }
}

export default DisplayEntries;