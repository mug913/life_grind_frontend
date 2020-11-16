import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGoal} from '../../actions/goalActions'


class NewEntryFields extends Component {

   

handleChange = (field,event) => {
  this.props.handleFieldChange(field,this.props.number,event)
  //  this.setState({...this.state, entrydata: {
   //     ...this.state.entrydata,
    //    [`field_${this.props.number}_${field}`]: event.target.value
    //}});
 };


handleSubmit = (event) => {
    event.preventDefault()
       this.props.addGoal(this.state)
}

render() {
    return(
        <div>
            <form >
                <label>Field Name:</label>
                    <input type="text" onChange={this.handleChange.bind(this, 'name')} />
                <label>Field Data:</label>
                   <input type="text" onChange={this.handleChange.bind(this, 'data')} />          
                </form>
            </div>
        )
    }
}

export default connect(null,{addGoal})(NewEntryFields);
