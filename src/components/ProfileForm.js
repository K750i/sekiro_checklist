import React, {Component} from 'react';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.profile,
      profileInputEnabled: false,
    };
    this.profileInput = React.createRef();
  }

  handleAddClick = e => {
    e.preventDefault();
    this.profileInput.current.disabled = false;
    this.profileInput.current.select();
  };

  handleTextInput = e => {
    this.setState({profile: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addProfile(this.state.profile);
    this.profileInput.current.disabled = true;
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Selected Profile
            <input
              type="text"
              ref={this.profileInput}
              name="profile"
              value={this.state.profile}
              onChange={this.handleTextInput}
              disabled
            />
          </label>
          <button type="button" onClick={this.handleAddClick}>
            Add
          </button>
        </form>
      </section>
    );
  }
}

export default ProfileForm;
