import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ExternalTeamsService from "../../services/externalteams.service"

import "../../styles/styles.css"

export default class DeleteExternalTeam extends Component {
    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        ExternalTeamsService.delete(id)
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
                <Link to="/externalteams/add/">Add </Link>
                <Link to="/externalteams/list/"> List </Link>
            </div>
        );
    }
}