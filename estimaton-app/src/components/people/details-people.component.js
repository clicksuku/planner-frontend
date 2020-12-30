import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PeopleDataService from "../../services/people.service"

import "../../styles/styles.css"

export default class DetailsPerson extends Component {
    state = {
        people: {}
      };

    componentDidMount() {
        var id = this.props.match.params.id;
        PeopleDataService.get(id)
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
        
        const data= JSON.stringify(this.state.people);
        return (
           <div class='submit-form'>
                <p> Component Details Below </p>   
                <div>{data}</div>
                <Link to="/people/list/"> List </Link>
            </div>
        );
    }
}