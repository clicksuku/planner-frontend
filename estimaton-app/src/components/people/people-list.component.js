import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PeopleDataService from "../../services/people.service"
import "../../styles/styles.css"

export default class PeopleList extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        PeopleDataService.getAll()
        .then(response => {
            console.log(response.data);
            const people = response.data;
            this.setState({people});
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
            <h1>List of People</h1> 
            <br/>
            <br/>

            <table id="peoplelist">
            
            {this.state.people.map((person, index) => (
              
               <tr key={index}>
                   <td>{person.Name}</td>
                   <td> <Link to={'/people/list/' + person.Id  }> Details </Link> </td>
                   <td> <Link to={'/people/update/' + person.Id  }>Edit</Link> </td>
                   <td> <Link to={'/people/delete/' + person.Id  }> Delete </Link> </td>
                </tr>
              
            ))}

            
            </table>
            </div>
           </div>
            
        );
    } 
}