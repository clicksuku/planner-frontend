import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PeopleDataService from "../../services/people.service"

import "../../styles/styles.css"

export default class DeletePerson extends Component {
    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        PeopleDataService.delete(id)
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
                <Link to="/people/add/">Add </Link>
                <Link to="/people/list/"> List </Link>
            </div>
        );
    }
}