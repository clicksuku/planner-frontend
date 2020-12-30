import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ExternalOrgsDataService from "../../services/externalorgs.service"

import "../../styles/styles.css"

export default class DeletePaymentsDomain extends Component {
    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        ExternalOrgsDataService.delete(id)
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
                <Link to="/externalorgs/add/">Add </Link>
                <Link to="/externalorgs/list/"> List </Link>
            </div>
        );
    }
}