import React, { Component } from "react";
import ProgramDataService from "../../services/programs.service"
import "../../styles/styles.css"

export default class DisplayProgramControl extends Component {
    
    constructor(props){
        super(props);
        
        this.state = { 
          programs: [], 
        };
        
        this.value = this.props.OrgId;
        this.handleChange = this.handleChange.bind(this);
    }     

    componentDidMount() {
      var initialOrgs = [];
      
      ProgramDataService.getAll()
      .then(response => {
          console.log(response.data);
          initialprograms = response.data.map( (org) =>   { 
            return program;
          });
          this.setState({
            programs: initialprograms,
          });
        })
        .catch(e => 
          console.log(e))
      } 

      handleChange(event) {  
        //this.setState({value: event.target.value});  
        this.value=event.target.value;
        this.props.onChangeProgramId(event.target.value);
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