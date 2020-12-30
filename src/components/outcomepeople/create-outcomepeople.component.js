import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OutcomePeopleDataService from "../../services/outcomepeople.service"
import "../../styles/styles.css"


export default class CreateOutcomePeople extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTShirtSize = this.onChangeTShirtSize.bind(this);
        this.onChangeLinks = this.onChangeLinks.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeSprints = this.onChangeSprints.bind(this);

        this.saveProgram = this.saveProgram.bind(this);
        this.newProgram = this.newProgram.bind(this);
    
        this.state = {
          id: null,
          Name: "",
          Description: "", 
          TShirtSize: "",
          Links: "",
          Color: "",
          Sprints: "",
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

      onChangeTShirtSize(e) {
        this.setState({
          TShirtSize: e.target.value
        });
      }

      onChangeLinks(e) {
        this.setState({
          Links: e.target.value
        });
      }

      onChangeColor(e) {
        this.setState({
          Color: e.target.value
        });
      }
      
      onChangeSprints(e) {
        this.setState({
          Sprints: e.target.value
        });
      }

      saveProgram() {
        var data = {
          Name: this.state.Name,
          Description: this.state.Description,
          TShirtSize: this.state.TShirtSize,
          Links: this.state.Links,
          Color:this.state.Color,
          Sprints:this.state.Sprints
        };
    
        OutcomePeopleDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              Name: response.data.Name,
              Description: response.data.Description,
              TShirtSize:response.data.TShirtSize,
              Links: response.data.Links,
              Color: response.data.Color,
              Sprints:response.data.Sprints,
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      newProgram() {
        this.setState({
          id: null,
          Name: "",
          Description: "",
          TShirtSize:"",
          Links:"",
          Color:"",
          Sprints:"",
          submitted: false
        });
      }
    
      render() {
        return (
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className="btn btn-success" onClick={this.newProgram}>
                    Add
                  </button>
                  <br/>
                  <br/>
                  <br/>
                  <Link to="/programs/list/"> List </Link>  
                </div>
              ) : (
                <div id="program-create-div">
                  <h2>Add a new Program!!</h2>
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
                    <label htmlFor="tshirtsize">TShirt Size</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tshirtsize"
                      required
                      value={this.state.TShirtSize}
                      onChange={this.onChangeTShirtSize}
                      name="tshirtsize"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="links">Links</label>
                    <input
                      type="text"
                      className="form-control"
                      id="links"
                      required
                      value={this.state.Links}
                      onChange={this.onChangeLinks}
                      name="links"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      id="color"
                      required
                      value={this.state.Color}
                      onChange={this.onChangeColor}
                      name="color"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sprints">Sprints</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sprints"
                      required
                      value={this.state.Sprints}
                      onChange={this.onChangeSprints}
                      name="sprints"
                    />
                  </div>
      
                  <button id="program-submit"  onClick={this.saveProgram} className="btn btn-success">
                    Submit
                  </button>
                </div>
              )}
            </div>
          );
      }
}