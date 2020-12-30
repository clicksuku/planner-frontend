import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaymentsDomainsDataService from "../../services/paymentsdomains.service"
import "../../styles/styles.css"

export default class AddPaymentsDomain extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.savePaymentsDomain = this.savePaymentsDomain.bind(this);
    this.newPaymentsDomain = this.newPaymentsDomain.bind(this);

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

  savePaymentsDomain() {
    var data = {
      Name: this.state.Name,
      Description: this.state.Description
    };

    PaymentsDomainsDataService.create(data)
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

  newPaymentsDomain() {
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
              <button className="btn btn-success" onClick={this.newPaymentsDomain}>
                Add
              </button>
              <br/>
              <br/>
              <br/>
              <Link to="/paymentsdomains/list/"> List </Link>
            </div>
          ) : (
            <div id="paymentsdomain-create-div">
              <h2>Add a new PaymentsDomain!!</h2>
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
  
              <button id="paymentsdomain-submit"  onClick={this.savePaymentsDomain} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}