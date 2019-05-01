import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      selectedProfile: '',
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
    if (
      window.confirm(
        `Are you sure you want to delete the profile named ${
          this.state.selectedProfile
        }?`,
      )
    )
      this.props.deleteProfile(this.state.selectedProfile);
  };

  handleSelect = e => {
    this.props.changeProfile(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newProfile = this.profileInput.current.value.trim();
    if (newProfile === '') {
      alert('Invalid profile name');
      this.profileInput.current.value = '';
      return;
    }

    if (this.state.profiles.includes(newProfile)) {
      alert('Profile already exist');
    } else {
      this.props.addProfile(newProfile);
      this.profileInput.current.value = '';
    }
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <InputGroup size="sm" className="mr-2">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Profile</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as="select"
            value={this.state.selectedProfile}
            onChange={this.handleSelect}>
            {this.state.profiles.map(profile => {
              return (
                <option value={profile} key={profile}>
                  {profile}
                </option>
              );
            })}
          </Form.Control>
        </InputGroup>

        <InputGroup size="sm" className="mr-2">
          <FormControl
            ref={this.profileInput}
            placeholder="new profile"
            aria-label="new profile"
            aria-describedby="basic-addon2"
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
          variant="danger"
          onClick={this.handleDelete}>
          Delete Profile
        </Button>
      </Form>
    );
  }
}
export default ProfileForm;
