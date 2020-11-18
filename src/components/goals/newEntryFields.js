import React, { Component } from 'react'



class NewEntryFields extends Component {

   

handleChange = (field,event) => {
  this.props.handleFieldChange(field,this.props.number,event)
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

export default NewEntryFields;
