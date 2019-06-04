import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelpers';
import { Container, Image, Menu, Visibility } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { logout } from '../actions/login';
import PropTypes from 'prop-types';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    }


    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: null })
    // ES6 doesnot need binding
    onLogOut = () => {
        this.props.logout();
    }

    render() {
        const { menuFixed } = this.state
        const { isAuthenticated } = this.props.login;
        // console.log('Props: ', isAuthenticated);

        const userLinks = (
            <Container text>
                <Menu.Item as={Link} to="/" exact="true">
                    <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                    <Menu.Item header>Movieapp</Menu.Item>
                </Menu.Item>
                <Menu.Item as={NavLink} to="/movies" exact>
                    Movies
                </Menu.Item>
                <Menu.Item as={NavLink} to="/movies/new" exact>
                    Add New
                </Menu.Item>
                <Menu.Item as={NavLink} to="/login" onClick={this.onLogOut} exact>
                    Log Out
                </Menu.Item>
            </Container>
        );
        const guestLinks = (
            <Container text>
                <Menu.Item as={Link} to="/" exact="true">
                    <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                    <Menu.Item header>Movieapp</Menu.Item>
                </Menu.Item>
                <Menu.Item as={NavLink} to="/movies" exact>
                    Movies
                </Menu.Item>
                <Menu.Item as={NavLink} to="/login" exact>
                    login
                </Menu.Item>
            </Container>
        );

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        {isAuthenticated ? userLinks : guestLinks}
                    </Menu>
                </Visibility>
            </div>
        )
    }


}

Header.prototypes = {
    login: PropTypes.object.isRequired
}

const mapStateToProps = ({ login }) => {
    return {
        login
    }
}
// the method coming from action
const mapDispatchToProps = {
    logout
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
