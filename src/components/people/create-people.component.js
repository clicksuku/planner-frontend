import React, { Component } from "react";
import { Link } from "react-router-dom";
import PeopleDataService from "../../services/people.service"
import DisplayPaymentSkillsControl from "../reusables/DisplayPaymentSkillsControl"
import { v4 as uuidv4 } from 'uuid';

import "../../styles/styles.css"
import TimeSheetControl from "../reusables/TimeSheetControl";


export default class AddOutcome extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.handleChangePrimarySkillSet = this.handleChangePrimarySkillSet.bind(this);
    this.handleChangeSecondarySkillSet = this.handleChangeSecondarySkillSet.bind(this);

    this.handleChangeQuarter = this.handleChangeQuarter.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChageQuarterCapacity = this.handleChageQuarterCapacity.bind(this);
    this.handleChageQuarterReserve = this.handleChageQuarterReserve.bind(this);
    this.handleChageQuarterLeaves = this.handleChageQuarterLeaves.bind(this);
    this.handleChageQuarterAvailable = this.handleChageQuarterAvailable.bind(this);

    this.savePerson = this.savePerson.bind(this);
    this.newPerson = this.newPerson.bind(this);

    this.state = {
      id: null,
      Name: "",
      Description: "", 
      PrimarySkillSet:0,
      SecondarySkillSet:0,
      Quarter:"",
      Year:"",
      QuarterCapacityInDays:0,
      QuarterReserveInDays:0,
      QuarterLeavesInDays:0,
      QuarterAvailableInDays:0,
      SpringEngagementMatrix: "",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      Description: e.target.value
    });
  }

  handleChangePrimarySkillSet(value) {
    this.setState({ PrimarySkillSet: value });
  }

  handleChangeSecondarySkillSet(value) {
    this.setState({ SecondarySkillSet: value });
  }

  handleChangeYear(value)
  {
    this.setState({Year: value});  
    
  }

  handleChangeQuarter(value) {  
    this.setState({Quarter: value});  
    
  }
  
  handleChageQuarterCapacity(value) {
    this.setState({
      QuarterCapacityInDays: value
    });
  }

  handleChageQuarterReserve(value){
    this.setState({
      QuarterReserveInDays: value
    });
  }

  handleChageQuarterLeaves(value){
    this.setState({
      QuarterLeavesInDays: value
    });
  }

  handleChageQuarterAvailable(value){
    this.setState({
      QuarterAvailableInDays: value
    });
  }


  savePerson() {
    var data = {
      Name: this.state.Name,
      Description: this.state.Description,
      PrimarySkillSet: parseInt(this.state.PrimarySkillSet),
      SecondarySkillSet: parseInt(this.state.SecondarySkillSet),
      QuarterYear: this.state.Quarter + this.state.Year,
      QuarterCapacityInDays: this.state.QuarterCapacityInDays,
      QuarterReserveInDays: this.state.QuarterReserveInDays,
      QuarterLeavesInDays: this.state.QuarterLeavesInDays,
      QuarterAvailableInDays: this.state.QuarterAvailableInDays,
      SpringEngagementMatrix: this.state.SpringEngagementMatrix
    };

    PeopleDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          Name: response.data.Name,
          Description: response.data.Description,
          PrimarySkillSet:response.data.PrimarySkillSet,
          SecondarySkillSet:response.data.SecondarySkillSet,
          QuarterYear: response.data.QuarterYear,
          QuarterCapacityInDays: response.data.QuarterCapacityInDays,
          QuarterReserveInDays: response.data.QuarterReserveInDays,
          QuarterLeavesInDays: response.data.QuarterLeavesInDays,
          QuarterAvailableInDays: response.data.QuarterAvailableInDays,
          SpringEngagementMatrix: response.data.SpringEngagementMatrix,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPerson() {
    this.setState({
      id: null,
      Name: "",
      Description: "",
      PrimarySkillSet:0,
      SecondarySkillSet:0,
      Quarter:"",
      Year:"",
      QuarterCapacityInDays:0,
      QuarterReserveInDays:0,
      QuarterLeavesInDays:0,
      QuarterAvailableInDays:0,
      SpringEngagementMatrix: "",
      submitted: false
    });
  }

  render() {
    let unique_key1 = uuidv4();
    let unique_key2 = uuidv4();
    let unique_key3 = uuidv4();
    return (
        <div className="submit-form" id="people-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newPerson}>
                Add
              </button>
              <br/>
              <br/>
              <br/>
              <Link to="/people/list/"> List </Link>
            </div>
          ) : (
            <div id="person-create-div">
              <h2>Add a new Person!!</h2>
              <br/>
              <br/>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="Description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>


              <div className="form-group">
                <label htmlFor="primarySkillSet">Primary Payments Skill</label>
                <DisplayPaymentSkillsControl key="PeopleSkill1" skillId={this.state.PrimarySkillSet} onChangeSkill={this.handleChangePrimarySkillSet}>
                </DisplayPaymentSkillsControl>
              </div>


              <div className="form-group">
                <label htmlFor="secondarySkillSet">Secondary Payments Skill</label>       
                <DisplayPaymentSkillsControl key="PeopleSkill2" skillId={this.state.SecondarySkillSet} onChangeSkill={this.handleChangeSecondarySkillSet}>
                </DisplayPaymentSkillsControl>
              </div>

              <br></br>

              <div className="form-group" id="timeSheetControl">
                <label htmlFor="Leaves">Availability</label>       
                <TimeSheetControl key="TimeSheetControlForm"
                    quarter={this.state.Quarter} 
                    year = {this.state.Year} 
                    capacity = {this.state.QuarterCapacityInDays} 
                    reserve = {this.state.QuarterReserveInDays} 
                    leaves = {this.state.QuarterLeavesInDays} 
                    available = {this.state.QuarterAvailableInDays} 
                    onHandleChangeQuarter={this.handleChangeQuarter}   
                    onHandleChangeYear={this.handleChangeYear} 
                    onHandleChageQuarterCapacity={this.handleChageQuarterCapacity} 
                    onHandleChageQuarterReserve={this.handleChageQuarterReserve} 
                    onHandleChageQuarterLeaves={this.handleChageQuarterLeaves} 
                    onHandleChageQuarterAvailable={this.handleChageQuarterAvailable} 
                > 
                </TimeSheetControl>
              </div>
  
              <button id="person-submit"  onClick={this.savePerson} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}