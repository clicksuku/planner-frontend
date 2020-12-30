import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ExternalTeamsService from "../../services/externalteams.service"
import ExternalOrgsDataService from "../../services/externalorgs.service"
import "../../styles/styles.css"

export default class ExternalTeamList extends Component {
    state = {
        externalteams: [],
        externalorgs:[]
    }

    componentDidMount() {
        ExternalOrgsDataService.getAll()
        .then(response => {
            console.log(response.data);
            const externalorgs = response.data;
            this.setState({externalorgs});
            })
        .catch(e => 
            console.log(e)
        );

        ExternalTeamsService.getAll()
        .then(response => {
            //console.log(response.data);
            const externalteams = response.data;
            this.setState({externalteams});
            })
        .catch(e => 
            console.log(e)
        );

    }

    getExternalOrgById = orgId => {
        return (
            this.state.externalorgs.find(org=> org.Id === orgId)
        ); 
        
    }
      
    render() {
        return (
            <div className="container">
            <div className="col-xs-8">
            
            <br/>
            <br/>
            <br/>
            <h1>List of External Teams</h1> 
            <br/>
            <br/>
            <table id="externalteamslist">
            <tbody>
            {
                
                this.state.externalteams.map((externalteam, index) =>  {
                        
                    return(
                        <tr key={index}>
                        <td>{externalteam.Name}</td>
                        <td> {  this.getExternalOrgById(externalteam.OrgId).Name } </td>
                        
                        <td> <Link to={'/externalteams/update/' + externalteam.Id  }>Edit</Link> </td>
                        <td> <Link to={'/externalteams/delete/' + externalteam.Id  }> Delete </Link> </td>
                        </tr>
                        );
                    })
            }   
            </tbody>
            </table>
            </div>
           </div>
            
        );
    } 
}