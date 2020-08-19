import React, { Component } from "react";
import {
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavLink, Dropdown, DropdownToggle, DropdownMenu,
    DropdownItem, InputGroup, InputGroupAddon,
    InputGroupText, FormInput, Collapse, Col
  } from "shards-react";


export default class NavMenu_ extends React.Component {

    constructor(props) {

        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {

            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {

        this.setState({

            ...this.state,
            ...{

                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {

        this.setState({

            ...this.state,
            ...{

                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {

        return(

            <Navbar type="dark" theme="dark" expand="md" sticky="true" fixed="true">

            <NavbarBrand href="#">♦️♣️ BlackJacku ♠️♥️</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}/>

            <Collapse open={this.state.collapseOpen} navbar>

                <Nav navbar>

                    <NavItem>
                        <NavLink active href="#"> Active</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink active href="#"> Active </NavLink>
                    </NavItem>
                </Nav>

            </Collapse>
            </Navbar>
        )
    }
}