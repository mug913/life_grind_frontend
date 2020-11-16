import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGoal} from '../../actions/goalActions'


class NewEntryFields extends Component {

    state = {entrydata: {
            field_1_name: null,
            field_1_type: null,
            field_1_data: null,
            field_2_name: null,
            field_2_type: null,
            field_2_data: null,
            field_3_name: null,
            field_3_type: null,
            field_3_data: null}
    };

handleChange = (field, event) => {
    this.setState({...this.state, goaldata: {
        ...this.state.goaldata,
        [field]: event.target.value
    }});
 };


handleSubmit = (event) => {
    event.preventDefault()
       this.props.addGoal(this.state)
}

handleOnClick = (number,type) => {
//    let fieldType = `field_${number}_type`
//    let fieldData = `field_${number}_data`
//    let fieldVal = `this.state.entrydata.field_${number}_value`
//    this.setState({...this.state, entrydata: {
//        ...this.state.entrydata,
//        [`${fieldType}`]: type
//    }});
//    return <input type={type} onChange={this.handleChange.bind(this, `${fieldData}`)} value={fieldVal}/> 
}
  

    


render() {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>>
                <label>Field Name:</label>
                    <input type="text" onChange={this.handleChange.bind(this, 'field_1_name')} value={this.state.entrydata.field_1_name}/>
                <label>Field Data:</label>
                   <input type="text" onChange={this.handleChange.bind(this, 'field_1_data')} value={this.state.entrydata.field_1_data}/>          
                <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null,{addGoal})(NewEntryFields);
