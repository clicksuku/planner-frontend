import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProgramsDataService from "../../services/programs.service"
import "../../styles/styles.css"


import "../../styles/styles.css"

export default class DeleteProgram extends Component {

    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        ProgramsDataService.delete(id)
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
                <Link to="/programs/add/">Add </Link>
                <Link to="/programs/list/"> List </Link>
            </div>
        );
    }
}