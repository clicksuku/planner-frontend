import React, { Component } from "react";
import ExternalOrgsDataService from "../../services/externalorgs.service"
import "../../styles/styles.css"

export default class DisplayOrgListControl extends Component {
    
    constructor(props){
        super(props);
        
        this.state = { 
          orgs: [], 
        };
        
        this.value = this.props.OrgId;
        this.handleChange = this.handleChange.bind(this);
    }     

    componentDidMount() {
      var initialOrgs = [];
      
      ExternalOrgsDataService.getAll()
      .then(response => {
          console.log(response.data);
          initialOrgs = response.data.map( (org) =>   { 
            return org;
          });
          this.setState({
            orgs: initialOrgs,
          });
        })
        .catch(e => 
          console.log(e))
      } 

      handleChange(event) {  
        //this.setState({value: event.target.value});  
        this.value=event.target.value;
        this.props.onChangeOrgId(event.target.value);
      }
      
      render(){
          let orgs = this.state.orgs;
          let optionItems = orgs.map((org) => 
                <option key={org.Id} value={org.Id}>{org.Name}</option>
            ); 

            return (
              <div>
                  <select id="SelectControl" value={this.value} onChange={this.handleChange}>
                    {optionItems}
                  </select>
              </div>
            )
      }
}