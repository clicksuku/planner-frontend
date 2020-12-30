import React, { Component } from "react";
import "../../styles/styles.css"

export default class TimeSheetControl extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          Quarter:this.props.quarter,
          Year:this.props.year,
          QuarterCapacityInDays:this.props.capacity,
          QuarterReserveInDays:this.props.reserve,
          QuarterLeavesInDays:this.props.leaves,
          QuarterAvailableInDays:this.props.available,
          SpringEngagementMatrix: "",
          submitted: false
        };

        this.handleChangeQuarter = this.handleChangeQuarter.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.onChageQuarterCapacity = this.onChageQuarterCapacity.bind(this);
        this.onChageQuarterReserve = this.onChageQuarterReserve.bind(this);
        this.onChageQuarterLeaves = this.onChageQuarterLeaves.bind(this);
        this.onChageQuarterAvailable = this.onChageQuarterAvailable.bind(this);
    }     

    componentDidMount() {
          
      }    

      handleChangeYear(event)
      {
        this.setState({Year: event.target.value});  
        this.props.onHandleChangeYear(event.target.value);
      }

      handleChangeQuarter(event) {  
        this.setState({Quarter: event.target.value});  
        this.props.onHandleChangeQuarter(event.target.value);
      }
      
      onChageQuarterCapacity(e) {
         this.setState({
          QuarterCapacityInDays: e.target.value
        }); 

        this.props.onHandleChageQuarterCapacity(e.target.value);
      }

      onChageQuarterReserve(e){
         this.setState({
          QuarterReserveInDays: e.target.value
        }); 

        this.props.onHandleChageQuarterReserve(e.target.value);
      }

      onChageQuarterLeaves(e){
        this.setState({
          QuarterLeavesInDays: e.target.value
        });

        this.props.onHandleChageQuarterLeaves(e.target.value);
      }

      onChageQuarterAvailable(e){
        this.setState({
          QuarterAvailableInDays: e.target.value
        });

        this.props.onHandleChageQuarterAvailable(e.target.value);
      }

      
    

      render(){
            return (
              
              <div id="TimeSheetForm" key="TimeSheetForm">
                  
                  <div className="form-group">
                    <select id="Quarter" key="Quarter" 
                        value={this.state.Quarter} onChange={this.handleChangeQuarter}>
                        <option key="Q1" value="Q1">Q1</option>
                        <option key="Q2" value="Q2">Q2</option>
                        <option key="Q3" value="Q3">Q3</option>
                        <option key="Q4" value="Q4">Q4</option>
                    </select>

                    <br></br>
                    <br></br>
                    <label htmlFor="year">Year</label>
                    <input
                      type="text"
                      key="year"
                      className="form-control"
                      id="Year"
                      required
                      value={this.state.Year}
                      onChange={this.handleChangeYear}
                      name="year"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quartercapacity">Quarter Capacity</label>
                    <input
                      type="text"
                      className="form-control"
                      id="QuarterCapacity"
                      key="QuarterCapacity"
                      required
                      value={this.state.QuarterCapacityInDays}
                      onChange={this.onChageQuarterCapacity}
                      name="quartercapacity"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quarterreserve">Quarter Reserve</label>
                    <input
                      type="text"
                      className="form-control"
                      id="QuarterReserve"
                      key="QuarterReserve"
                      required
                      value={this.state.QuarterReserveInDays}
                      onChange={this.onChageQuarterReserve}
                      name="quarterreserve"
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="quarterleaves">Quarter Leaves</label>
                    <input
                      type="text"
                      className="form-control"
                      id="QuarterLeaves"
                      key="QuarterLeaves"
                      required
                      value={this.state.QuarterLeavesInDays}
                      onChange={this.onChageQuarterLeaves}
                      name="quarterleaves"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quarteravailable">Quarter Available</label>
                    <input
                      type="text"
                      className="form-control"
                      id="QuarterAvailable"
                      key="QuarterAvailable"
                      required
                      value={this.state.QuarterAvailableInDays}
                      onChange={this.onChageQuarterAvailable}
                      name="quarteravailable"
                    />
                  </div>            
              </div>
            )
      }
}