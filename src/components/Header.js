import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelpers';
import { Container, Image,  Menu, Visibility } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
	}


    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: null })
    
  render() {
    const { menuFixed } = this.state
      const { isAuthenticated } = this.props.login;
      console.log('Props: ', isAuthenticated);
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
                        <Menu.Item as={NavLink} to="/login" exact>
                            login
                        </Menu.Item>
                        {/* <Menu.Item as={NavLink} to="/movies/new" exact>
                            Add New
                        </Menu.Item> */}
                    </Container>
                </Menu>
            </Visibility>
      </div>
    )
  }

  
}

const mapStateToProps = ({ login }) => {
    return {
        login
    }
}


export default connect(mapStateToProps) (Header)
