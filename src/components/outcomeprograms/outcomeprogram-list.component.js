import React, { Component } from 'react'
import { Link } from "react-router-dom";
import OutcomeProgramsDataService from "../../services/outcomeprogram.service"
import "../../styles/styles.css"

export default class OutcomeProgramList extends Component {
    state = {
        outcomeprograms: []
    }

    componentDidMount() {
        OutcomeProgramsDataService.getAll()
        .then(response => {
            console.log(response.data);
            const outcomeprograms = response.data;
            this.setState({outcomeprograms});
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
            <h1>List of Outcome Programs Mapping</h1> 
            <br/>
            <br/>


            <table id="outcomeprogramlist">

            {this.state.outcomeprograms.map((outcomeprogram, index) => (
              
               <tr>
                   <td>{outcomeprogram.OutcomeId}</td>
                   <td>{outcomeprogram.ProgramId}</td>
                   <td> <Link to={'/outcomeprograms/update/' + outcomeprogram.ProgramId  }>Edit</Link> </td>
                   <td> <Link to={'/outcomeprograms/delete/' + outcomeprogram.ProgramId  }> Delete </Link> </td>
                </tr>
              
            ))}

            </table>
            </div>
           </div>
            
        );
    } 
}