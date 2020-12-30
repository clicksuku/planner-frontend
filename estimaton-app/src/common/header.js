import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Header extends Component {
    render() {
      
      return (
          <Navbar bg="dark" light expand="md">
          <Nav className="ml-left" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> Outcomes </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/outcomes/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/outcomes/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> Programs </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/programs/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/programs/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> Payments Domain </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/paymentsdomains/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/paymentsdomains/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> External Orgs </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/externalorgs/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/externalorgs/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> External Teams </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/externalteams/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/externalteams/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> People </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/people/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/people/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> OutcomePeople </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/outcomepeople/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/outcomepeople/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret> OutcomeProgram </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/outcomeprograms/list" active>List</DropdownItem>
                <DropdownItem tag="a" href="/outcomeprograms/add" >Add</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Navbar>
              
        )
    }
}