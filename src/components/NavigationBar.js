import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ProfileForm from './ProfileForm';

function NavigationBar(props) {
  const {
    profiles,
    selectedProfile,
    addProfile,
    changeProfile,
    deleteProfile,
  } = props;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Sekiro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
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
