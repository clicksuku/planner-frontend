import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OutcomeProgramsDataService from "../../services/outcomeprogram.service"
import "../../styles/styles.css"


import "../../styles/styles.css"

export default class DeleteOutcomeProgram extends Component {

    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        OutcomeProgramsDataService.delete(id)
        .then(response => {
            console.log(response.data);
            })
        .catch(e => 
            console.log(e)
        );
    }

    render() {
        return (
           <div class='submit-form'>
                <p> Component Deleted Successfully </p>   
                <Link to="/outcomeprograms/add/">Add </Link>
                <Link to="/outcomeprograms/list/"> List </Link>
            </div>
        );
    }
}