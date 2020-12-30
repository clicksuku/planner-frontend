import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import OutcomeList from "../components/outcomes/outcome-list.component"
import CreateOutcome from "../components/outcomes/create-outcome.component";
import EditOutcome from "../components/outcomes/edit-outcome.component"
import DeleteOutcome from "../components/outcomes/delete-outcome.component"

import ProgramList from "../components/programs/program-list.component"
import CreateProgram from "../components/programs/create-program.component"
import EditProgram from "../components/programs/edit-program.component"
import DeleteProgram from "../components/programs/delete-program.component"

import PaymentsDomainList from "../components/paymentsdomains/paymentsdomain-list.component"
import CreatePaymentsDomain from "../components/paymentsdomains/create-paymentsdomain.component"
import EditPaymentsDomain from "../components/paymentsdomains/edit-paymentsdomain.component"
import DeletePaymentsDomain from "../components/paymentsdomains/delete-paymentsdomain.component"

import ExternalOrgList from "../components/externalorgs/externalorg-list.component"
import CreateExternalOrg from "../components/externalorgs/create-externalorg.component"
import EditExternalOrg from "../components/externalorgs/edit-externalorg.component"
import DeleteExternalOrg from "../components/externalorgs/delete-externalorg.component"

import ExternalTeamList from "../components/externalteams/externalteam-list.component"
import CreateExternalTeam from "../components/externalteams/create-externalteam.component"
import EditExternalTeam from "../components/externalteams/edit-externalteam.component"
import DeleteExternalTeam from "../components/externalteams/delete-externalteam.component"


import PeopleList from "../components/people/people-list.component"
import CreatePerson from "../components/people/create-people.component"
import EditPerson from "../components/people/edit-people.component"
import DeletePerson from "../components/people/delete-people.component"
import DetailsPerson from '../components/people/details-people.component';
import CreateOutcomeProgram from '../components/outcomeprograms/create-outcomeprogram.component';
import EditOutcomeProgram from '../components/outcomeprograms/edit-program.component';
import DeleteOutcomeProgram from '../components/outcomeprograms/delete-program.component';
import OutcomeProgramList from '../components/outcomeprograms/outcomeprogram-list.component';
import OutcomePeopleList from '../components/outcomepeople/outcomepeople-list.component';
import CreateOutcomePeople from '../components/outcomepeople/create-outcomepeople.component';
import EditOutcomePeople from '../components/outcomepeople/edit-outcomepeople.component';
import DeleteOutcomePeople from '../components/outcomepeople/delete-outcomepeople.component';


export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/outcomes/list" component={OutcomeList} />  
                    <Route exact path="/outcomes/add" component={CreateOutcome} />  
                    <Route exact path="/outcomes/update/:id" component={EditOutcome} />  
                    <Route exact path="/outcomes/delete/:id" component={DeleteOutcome} />  

                    <Route exact path="/programs/list" component={ProgramList} />  
                    <Route exact path="/programs/add" component={CreateProgram} />  
                    <Route exact path="/programs/update/:id" component={EditProgram} />  
                    <Route exact path="/programs/delete/:id" component={DeleteProgram} />  
                    
                    <Route exact path="/paymentsdomains/list" component={PaymentsDomainList} />  
                    <Route exact path="/paymentsdomains/add" component={CreatePaymentsDomain} />  
                    <Route exact path="/paymentsdomains/update/:id" component={EditPaymentsDomain} />  
                    <Route exact path="/paymentsdomains/delete/:id" component={DeletePaymentsDomain} /> 

                    <Route exact path="/externalorgs/list" component={ExternalOrgList} />  
                    <Route exact path="/externalorgs/add" component={CreateExternalOrg} />  
                    <Route exact path="/externalorgs/update/:id" component={EditExternalOrg} />  
                    <Route exact path="/externalorgs/delete/:id" component={DeleteExternalOrg} /> 

                    <Route exact path="/externalteams/list" component={ExternalTeamList} />  
                    <Route exact path="/externalteams/add" component={CreateExternalTeam} />  
                    <Route exact path="/externalteams/update/:id" component={EditExternalTeam} />  
                    <Route exact path="/externalteams/delete/:id" component={DeleteExternalTeam} /> 
          
                    <Route exact path="/people/list" component={PeopleList} />  
                    <Route exact path="/people/add" component={CreatePerson} />  
                    <Route exact path="/people/update/:id" component={EditPerson} />  
                    <Route exact path="/people/list/:id" component={DetailsPerson} />  
                    <Route exact path="/people/delete/:id" component={DeletePerson} /> 

                    <Route exact path="/outcomeprograms/list" component={OutcomeProgramList} />  
                    <Route exact path="/outcomeprograms/add" component={CreateOutcomeProgram} />  
                    <Route exact path="/outcomeprograms/update/:id" component={EditOutcomeProgram} />  
                    <Route exact path="/outcomeprograms/delete/:id" component={DeleteOutcomeProgram} /> 

                    <Route exact path="/outcomepeople/list" component={OutcomePeopleList} />  
                    <Route exact path="/outcomepeople/add" component={CreateOutcomePeople} />  
                    <Route exact path="/outcomepeople/update/:id" component={EditOutcomePeople} />  
                    <Route exact path="/outcomepeople/delete/:id" component={DeleteOutcomePeople} /> 

                </Switch>
            </div>
        )
    }
}
