import React, { Component } from 'react'
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Container fluid={true} style={container}>
                <Container fluid={false}>
                    <Navbar color="faded" light>
                        <NavbarBrand href="/" className="mr-auto">SimpleWeather</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">API</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </Container>
        )
    }
}

const container = {
    padding: 0,
    marginBottom: 60
}


Container.propTypes = {
    fluid: PropTypes.bool
}