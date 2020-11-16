import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGoal} from '../../actions/goalActions'
import NewEntryFields from './newEntryFields'


class NewGoalForm extends Component {

    constructor(props){
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this) 
        this.state = {
            goaldata: {
                name: '',
                position: '',
                field_number: 0,
                level: 0,
                streak: 0},  
            entrydata: {
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
        }



handleChange = (field, event) => {
    console.log(this.state)
    this.setState({...this.state, goaldata: {
        ...this.state.goaldata,
        [field]: event.target.value
    }});
 };

handleFieldChange = (field, number, event) => {
    if(field==='data'){
        let dataType = isNaN(event.target.value) ? 'String' : 'Number'
    this.setState({...this.state, entrydata: {
        ...this.state.entrydata,
        [`field_${number}_${field}`]: event.target.value,
       [`field_${number}_type`]: dataType,
    }});}
    else{
        this.setState({...this.state, entrydata: {
        ...this.state.entrydata,
        [`field_${number}_${field}`]: event.target.value,
   }})};
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
          <NewEntryFields number={`${i+1}`} handleFieldChange={this.handleFieldChange} />
        )}

    return(
        <div>
            <label>Create Goal:</label>
         
            <label>Goal Name:</label>
                <input type="text" onChange={this.handleChange.bind(this, 'name')} value={this.state.goaldata.name}/>
                {this.displayAddFieldButton()}    
                {fields}
        </div>        
        )
    }
}

export default connect(null,{addGoal})(NewGoalForm);
