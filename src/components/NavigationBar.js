import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ProfileForm from './ProfileForm';
import {NavLink} from 'react-router-dom';

function NavigationBar(props) {
  const {
    profiles,
    selectedProfile,
    addProfile,
    changeProfile,
    deleteProfile,
  } = props;

  const linkStyle = {
    textDecoration: 'none',
    marginRight: '10px',
    color: 'rgba(255,255,255,.5)',
  };

  const linkStyleActive = {
    color: 'rgba(255,255,255,.8)',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand>
        <img
          src={require('../assets/sekiro.png')}
          width="60"
          alt="Sekiro Logo"
        />
        &nbsp;Sekiro&trade; Shadows Die Twice
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink
              style={linkStyle}
              activeStyle={linkStyleActive}
              exact
              to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              style={linkStyle}
              activeStyle={linkStyleActive}
              exact
              to="/faq">
              FAQ
            </NavLink>
          </Nav.Item>
        </Nav>
        <ProfileForm
          profiles={profiles}
          selectedProfile={selectedProfile}
          addProfile={addProfile}
          changeProfile={changeProfile}
          deleteProfile={deleteProfile}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
