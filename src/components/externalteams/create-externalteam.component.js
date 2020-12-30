import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExternalTeamsService from "../../services/externalteams.service"
import DisplayOrgListControl from "../reusables/DisplayOrgListControl"
import { v4 as uuidv4 } from 'uuid';

import "../../styles/styles.css"

export default class AddExternalTeam extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.handleChangeOrgId = this.handleChangeOrgId.bind(this);

    this.saveExternalTeam = this.saveExternalTeam.bind(this);
    this.newExternalTeam = this.newExternalTeam.bind(this);

    this.state = {
      id: null,
      Name: "",
      Description: "", 
      OrgId:0,
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

  handleChangeOrgId(value) {
    this.setState({ OrgId: value });
  }

  saveExternalTeam() {
    var data = {
      Name: this.state.Name,
      Description: this.state.Description,
      OrgId: this.state.OrgId
    };

    ExternalTeamsService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          Name: response.data.Name,
          Description: response.data.Description,
          OrgId: response.data.OrgId,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newExternalTeam() {
    this.setState({
      id: null,
      Name: "",
      OrgId:0,
      Description: "",
      submitted: false
    });
  }

  render() {
    let unique_key1 = uuidv4();
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newExternalTeam}>
                Add
              </button>
              <br/>
              <br/>
              <br/>
              <Link to="/externalTeams/list/"> List </Link>
            </div>
          ) : (
            <div id="externalteam-create-div">
              <h2>Add a new External Team!!</h2>
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
                <label htmlFor="orgid">Org Id</label>
                <DisplayOrgListControl key={unique_key1} OrgId={this.state.OrgId} onChangeOrgId={this.handleChangeOrgId}>
                </DisplayOrgListControl>
              </div>
  
              <button id="externalteam-submit"  onClick={this.saveExternalTeam} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}