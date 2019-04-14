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

  handleAddClick = e => {
    this.profileInput.current.disabled = false;
    this.profileInput.current.focus();
  };

  handleSelect = e => {
    this.props.changeProfile(e.target.value);
  };

  // handleTextInput = e => {
  //   this.setState({profile: e.target.value});
  // };

  handleSubmit = e => {
    e.preventDefault();
    const newProfile = this.profileInput.current.value;
    if (this.state.profiles.includes(newProfile)) {
      alert('Profile already exist');
    } else {
      this.props.addProfile(newProfile);
      this.profileInput.current.value = '';
      this.profileInput.current.disabled = true;
    }
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Selected Profile &nbsp;
            <select
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
          <input type="text" ref={this.profileInput} disabled />
          &nbsp;
          <button type="button" onClick={this.handleAddClick}>
            Add
          </button>
        </form>
      </section>
    );
  }
}

export default ProfileForm;
