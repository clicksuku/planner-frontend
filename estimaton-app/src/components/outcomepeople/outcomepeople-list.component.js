import React, { Component } from 'react'
import { Link } from "react-router-dom";
import OutcomePeopleDataService from "../../services/outcomepeople.service"
import "../../styles/styles.css"

export default class OutcomePeopleList extends Component {
    state = {
        outcomepeoples: []
    }

    componentDidMount() {
        OutcomePeopleDataService.getAll()
        .then(response => {
            console.log(response.data);
            const outcomepeoples = response.data;
            this.setState({outcomepeoples});
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
            <h1>List of Outcome People Mapping</h1> 
            <br/>
            <br/>


            <table id="programlist">

            {this.state.outcomepeoples.map((outcomepeople, index) => (
              
               <tr>
                   <td>{outcomepeople.OutcomeId}</td>
                   <td>{outcomepeople.PeopleId}</td>
                   <td> <Link to={'/outcomepeople/update/' + outcomepeople.PeopleId  }>Edit</Link> </td>
                   <td> <Link to={'/outcomepeople/delete/' + outcomepeople.PeopleId  }> Delete </Link> </td>
                </tr>
              
            ))}

            </table>
            </div>
           </div>
            
        );
    } 
}