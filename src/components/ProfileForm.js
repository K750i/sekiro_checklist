import React, {Component} from 'react';

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

  // handleAddClick = () => {
  //   if (this.profileInput.current.value.trim() === '') return;
  // };

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

  // handleTextInput = e => {
  //   this.setState({profile: e.target.value});
  // };

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
      <section id="profile">
        <form onSubmit={this.handleSubmit}>
          <label>
            Selected Profile &nbsp;
            <select
              style={this.selectStyle}
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
            &nbsp;
          </label>
          <input
            style={this.inputStyle}
            type="text"
            ref={this.profileInput}
            placeholder="New Profile"
          />
          &nbsp;
          <button style={this.buttonStyle} type="submit">
            Add
          </button>
          &nbsp;
          <button
            style={this.buttonStyle}
            type="button"
            onClick={this.handleDelete}>
            Delete Profile
          </button>
        </form>
      </section>
    );
  }

  selectStyle = {
    backgroundColor: 'transparent',
    borderRadius: '4px',
    padding: '5px',
    maxWidth: '10%',
  };

  inputStyle = {
    borderRadius: '4px',
    border: 'none',
    padding: '6px',
    width: '20%',
  };

  buttonStyle = {
    borderRadius: '3px',
    padding: '5px',
    border: 'none',
  };
}

export default ProfileForm;
