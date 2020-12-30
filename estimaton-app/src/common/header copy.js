import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
         

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">FIFO PLANNING</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/outcomes" className="nav-link">Outcomes</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/programs" className="nav-link">Programs</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/people" className="nav-link">People</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/dependencies" className="nav-link">Dependencies</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/estimates" className="nav-link">Estimates</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/planner" className="nav-link">Planner</Link>
                    </li>
              </ul>
            </div>
          </nav>
          
          <br/>
          </div>

          
        )
    }
}