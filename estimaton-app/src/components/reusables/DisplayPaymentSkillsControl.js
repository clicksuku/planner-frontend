import React, { Component } from "react";
import PaymentsDomainsDataService from "../../services/paymentsdomains.service"
import "../../styles/styles.css"

export default class DisplayPaymentSkillsControl extends Component {
    
    constructor(props){
        super(props);
        
        this.state = { 
          value:this.props.skillId,
          paymentsdomains: [], 
        };
        
        this.handleChange = this.handleChange.bind(this);
    }     

    componentDidMount() {
      var initialDomains = [];
      
      PaymentsDomainsDataService.getAll()
      .then(response => {
          console.log(response.data);
          initialDomains = response.data.map( (domain) =>   { 
            return domain;
          });
          this.setState({
            paymentsdomains: initialDomains,
          });
        })
        .catch(e => 
          console.log(e))
      } 

      handleChange(event) {  
        this.setState({value: event.target.value});  
        this.props.onChangeSkill(event.target.value);
      }
      
      render(){
          let domains = this.state.paymentsdomains;
          let optionItems = domains.map((domain) => 
                <option key={domain.Id} value={domain.Id}>{domain.Name}</option>
            ); 

            return (
              <div>
                  <select id="SelectControl" value={this.state.value} onChange={this.handleChange}>
                    {optionItems}
                  </select>
              </div>
            )
      }
}