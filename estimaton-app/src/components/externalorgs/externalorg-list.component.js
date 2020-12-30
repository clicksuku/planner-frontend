import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ExternalOrgsDataService from "../../services/externalorgs.service"
import "../../styles/styles.css"

export default class PaymentsDomainList extends Component {
    state = {
        externalorgs: []
    }

    componentDidMount() {
        ExternalOrgsDataService.getAll()
        .then(response => {
            const externalorgs = response.data;
            this.setState({externalorgs});
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
            <h1>List of External Orgs</h1> 
            <br/>
            <br/>
            <table id="externalorglist">
            <tbody>
            {this.state.externalorgs.map((externalorg, index) => (
              
               <tr>
                   <td>{externalorg.Name}</td>
                   <td> <Link to={'/externalorgs/update/' + externalorg.Id  }>Edit</Link> </td>
                   <td> <Link to={'/externalorgs/delete/' + externalorg.Id  }> Delete </Link> </td>
                </tr>
              
            ))}
            
            </tbody>
            </table>
            </div>
           </div>
            
        );
    } 
}