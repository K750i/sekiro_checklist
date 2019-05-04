import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTimes} from '@fortawesome/free-solid-svg-icons';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      selectedProfile: '',
      show: false,
      showDelete: false,
      errorMsg: '',
    };
    this.profileInput = React.createRef();
  }

  componentDidMount() {
    this.setState({
      profiles: this.props.profiles,
      selectedProfile: this.props.selectedProfile,
    });
  }

  static getDerivedStateFromProps(props, state) {
    return {profiles: props.profiles, selectedProfile: props.selectedProfile};
  }

  handleDelete = () => {
    this.props.deleteProfile(this.state.selectedProfile);
    this.setState({showDelete: false});
  };

  handleSelect = e => {
    this.props.changeProfile(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newProfile = this.profileInput.current.value.trim();
    if (newProfile === '') {
      this.profileInput.current.value = '';
      this.setState({
        show: true,
        errorMsg: 'The name seems to be invalid. Please try again.',
      });
      this.profileInput.current.focus();
      return;
    }

    if (this.state.profiles.includes(newProfile)) {
      this.setState({
        show: true,
        errorMsg:
          'A profile with the same name already exists. Please enter a different name.',
      });
      this.profileInput.current.focus();
    } else {
      this.props.addProfile(newProfile);
      this.profileInput.current.value = '';
    }
  };

  handleClose = () => this.setState({show: false});

  handleDClose = () => this.setState({showDelete: false});

  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={this.handleSubmit} className="flex-nowrap">
          <InputGroup size="sm" className="mr-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Profile</InputGroup.Text>
            </InputGroup.Prepend>
            <select
              className="custom-select"
              value={this.state.selectedProfile}
              onChange={this.handleSelect}>
              {this.state.profiles.map(profile => {
                return (
                  <option value={profile} key={profile}>
                    {profile}
                  </option>
                );
              })}
            </select>
          </InputGroup>

          <InputGroup size="sm" className="mr-2 flex-shrink-0">
            <FormControl
              ref={this.profileInput}
              placeholder="new profile"
              aria-label="new profile"
              aria-describedby="basic-addon2"
              required
            />
            <InputGroup.Append>
              <Button type="submit" variant="info">
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <Button
            type="button"
            size="sm"
            className="flex-shrink-0"
            variant="outline-secondary"
            onClick={() => this.setState({showDelete: true})}>
            <FontAwesomeIcon icon={faUserTimes} />
            &nbsp;Delete Profile
          </Button>
        </Form>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Oops! There's an error.</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.errorMsg}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showDelete} onHide={this.handleDClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete the profile named{' '}
            <strong>{this.state.selectedProfile}</strong>?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={this.handleDClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default ProfileForm;
