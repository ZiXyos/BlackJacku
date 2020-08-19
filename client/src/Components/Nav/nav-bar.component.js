import React, { Component } from "react";
import {
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavLink, Dropdown, DropdownToggle, DropdownMenu,
    DropdownItem, InputGroup, InputGroupAddon,
    InputGroupText, FormInput, Collapse, Col
  } from "shards-react";

  import navLogo from "../../Assets/Jackpot.svg"
  import "../../Style/nav.css"

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

            <Navbar expand="md" sticky="true" fixed="true">

            <NavbarBrand href="#">
                <div className="img-pos">
                    <img className="nav-bar-logo"src={navLogo}/>
                </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}/>

            <Collapse open={this.state.collapseOpen} navbar>

                <Nav navbar>
                </Nav>

            </Collapse>
            </Navbar>
        )
    }
}