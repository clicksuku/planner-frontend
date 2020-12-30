import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ProgramsDataService from "../../services/programs.service"
import "../../styles/styles.css"

export default class OutcomeList extends Component {
    state = {
        programs: []
    }

    componentDidMount() {
        ProgramsDataService.getAll()
        .then(response => {
            console.log(response.data);
            const programs = response.data;
            this.setState({programs});
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
            <h1>List of Programs</h1> 
            <br/>
            <br/>


            <table id="programlist">

            {this.state.programs.map((program, index) => (
              
               <tr>
                   <td>{program.Name}</td>
                   <td>{program.Description}</td>
                   <td>{program.TShirtSize}</td>
                   <td>{program.Sprints}</td>
                   <td>{program.Color}</td>
                   <td> <Link to={'/programs/update/' + program.Id  }>Edit</Link> </td>
                   <td> <Link to={'/programs/delete/' + program.Id  }> Delete </Link> </td>
                </tr>
              
            ))}

            </table>
            </div>
           </div>
            
        );
    } 
}