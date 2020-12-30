import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OutcomesDataService from "../../services/outcomes.service"

import "../../styles/styles.css"

export default class DeleteOutome extends Component {
    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        OutcomesDataService.delete(id)
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
                <Link to="/outcomes/add/">Add </Link>
                <Link to="/outcomes/list/"> List </Link>
            </div>
        );
    }
}