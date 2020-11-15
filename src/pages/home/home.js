import React from "react";
import {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component {

render(){
    console.log(this.props.username)
    return (
        <div>
            <h1>{this.props.username}'s Page</h1>
        </div>
    )
}

}

function mapStateToProps(state){
    debugger
    return {username: state.username};
};

export default connect(mapStateToProps)(Home);