import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { addGoal} from '../../actions/goalActions'
import RecordEntryFields from './recordEntryFields'


class AddRecordForm extends Component {

    constructor(props){
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this) 
        this.state = {
            recordFormData: {
                date: null,
                field_1_data: null,
                field_2_data: null,
                field_3_data: null}
            };
    }



    handleChange = (field, event) => {
        this.setState({...this.state, recordFormData: {
            ...this.state.recordFormData,
            [field]: event.target.value
        }});
 };

handleFieldChange = (field, number, event) => {
    let today = new Date()
    let finalDate = `${today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDay()}`
    if(field==='data'){
        let dataType = isNaN(event.target.value) ? 'String' : 'Number'
    this.setState({...this.state, recorddata: {
        ...this.state.recorddata,
        date: finalDate,
        [`field_${number}_${field}`]: event.target.value,
       [`field_${number}_type`]: dataType,
    }});}
    else{
        this.setState({...this.state, recorddata: {
        ...this.state.recorddata,
        [`field_${number}_${field}`]: event.target.value,
   }})};
};
  
handleSubmit = event => {
    event.preventDefault()
    this.props.addGoal(this.props.goal.user_id, this.state)
 }

render() {
    const fields = [];
    for (let i = 0; i < this.props.goal.field_number; i++) {
        fields.push(
        <RecordEntryFields number={`${i+1}`} handleFieldChange={this.handleFieldChange} goal_position={this.props.goal_position}/>
        )}
    return(
        <div>
            <form onSubmit={this.handleSubmit}>>
                {fields}
                <input type="submit" />
            </form>
        </div>        
        )
    }
}


const mapStateToProps = (state,ownProps) => {
    return {
      goal: state.goalsReducer.user_goals[ownProps.goal_position]
     }
}

export default connect(mapStateToProps)(AddRecordForm);
