import React, { Component } from "react";
import { Link } from "react-router-dom";
import OutcomesDataService from "../../services/outcomes.service"
import "../../styles/styles.css"

export default class AddOutcome extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveOutcome = this.saveOutcome.bind(this);
    this.newOutcome = this.newOutcome.bind(this);

    this.state = {
      id: null,
      Name: "",
      Description: "", 
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

  saveOutcome() {
    var data = {
      Name: this.state.Name,
      Description: this.state.Description
    };

    OutcomesDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          Name: response.data.Name,
          Description: response.data.Description,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newOutcome() {
    this.setState({
      id: null,
      Name: "",
      Description: "",
      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newOutcome}>
                Add
              </button>
              <br/>
              <br/>
              <br/>
              <Link to="/outcomes/list/"> List </Link>
            </div>
          ) : (
            <div id="outcome-create-div">
              <h2>Add a new Outcome!!</h2>
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
  
              <button id="outcome-submit"  onClick={this.saveOutcome} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}