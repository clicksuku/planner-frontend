import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PaymentsDomainsDataService from "../../services/paymentsdomains.service"

import "../../styles/styles.css"

export default class DeletePaymentsDomain extends Component {
    state = {
        isDeleted:false
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        PaymentsDomainsDataService.delete(id)
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
                <Link to="/paymentsdomains/add/">Add </Link>
                <Link to="/paymentsdomains/list/"> List </Link>
            </div>
        );
    }
}