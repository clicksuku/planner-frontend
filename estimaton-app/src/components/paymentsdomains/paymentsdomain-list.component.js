import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PaymentsDomainsDataService from "../../services/paymentsdomains.service"
import "../../styles/styles.css"

export default class PaymentsDomainList extends Component {
    state = {
        paymentsdomains: []
    }

    componentDidMount() {
        PaymentsDomainsDataService.getAll()
        .then(response => {
            console.log(response.data);
            const paymentsdomains = response.data;
            this.setState({paymentsdomains});
            })
        .catch(e => 
            console.log(e)
        );
    }
      
    render() {
        return (
            <div className="container">
            <div className="col-xs-8">
            
            <br/>
            <br/>
            <br/>
            <h1>List of Payments Domains</h1> 
            <br/>
            <br/>

            <table id="paymentsdomainlist">
            <tbody>
            {this.state.paymentsdomains.map((paymentsdomain, index) => (
              
               <tr>
                   <td>{paymentsdomain.Name}</td>
                   <td> <Link to={'/paymentsdomains/update/' + paymentsdomain.Id  }>Edit</Link> </td>
                   <td> <Link to={'/paymentsdomains/delete/' + paymentsdomain.Id  }> Delete </Link> </td>
                </tr>
              
            ))}

            </tbody>
            </table>
            </div>
           </div>
            
        );
    } 
}