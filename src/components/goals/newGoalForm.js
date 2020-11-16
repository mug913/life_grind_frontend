import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGoal} from '../../actions/goalActions'
import NewEntryFields from './newEntryFields'


class NewGoalForm extends Component {

  

    state = {goaldata: {
            name: '',
            position: '',
            field_number: 0,
            level: 0,
            streak: 0},
            }



handleChange = (field, event) => {
    this.setState({...this.state, goaldata: {
        ...this.state.goaldata,
        [field]: event.target.value
    }});
 };



displayAddFieldButton = () => {
  if (this.state.goaldata.field_number < 3) {
    return  <button onClick={this.handleFieldClick}> Add Field </button>;
    }
    return null;
  }

handleFieldClick = () =>{
    this.setState({...this.state, goaldata: {
        ...this.state.goaldata,
        field_number: this.state.goaldata.field_number + 1
    }}); 
}

render() {
    const fields = [];

    for (let i = 0; i < this.state.goaldata.field_number; i++) {
        fields.push(
          <NewEntryFields number={`field-${i}`} onChange={this.onChange} />
        )}

    return(
        <div>
            <label>Create Goal:</label>
            {this.displayAddFieldButton()}       
            <label>Goal Name:</label>
                <input type="text" onChange={this.handleChange.bind(this, 'name')} value={this.state.goaldata.name}/>
                {this.displayAddFieldButton()}    
                {fields}
        </div>        
        )
    }
}

export default connect(null,{addGoal})(NewGoalForm);
