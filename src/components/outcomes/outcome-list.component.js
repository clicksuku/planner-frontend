import React, { Component } from 'react'
import { Link } from "react-router-dom";
import OutcomesDataService from "../../services/outcomes.service"
import "../../styles/styles.css"

export default class OutcomeList extends Component {
    state = {
        outcomes: []
    }

    componentDidMount() {
        OutcomesDataService.getAll()
        .then(response => {
            console.log(response.data);
            const outcomes = response.data;
            this.setState({outcomes});
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
            <h1>List of Outcomes</h1> 
            <br/>
            <br/>

            <table id="outcomelist">
            <tbody>
            {this.state.outcomes.map((outcome, index) => (
              
               <tr>
                   <td>{outcome.Name}</td>
                   <td> <Link to={'/outcomes/update/' + outcome.Id  }>Edit</Link> </td>
                   <td> <Link to={'/outcomes/delete/' + outcome.Id  }> Delete </Link> </td>
                </tr>
              
            ))}

            </tbody>
            </table>
            </div>
           </div>
            
        );
    } 
}