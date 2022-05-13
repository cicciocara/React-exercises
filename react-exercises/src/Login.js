/*Create a Login component containing three inputs:
 a username input, a password input and a remember checkbox.
  All three inputs should be controlled components. */

import React from 'react';

export class Login extends React.Component {
  state = {
    username: '',
    password: '',
    remember: false,
  };

  handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  render() {
    return (
      <div>
        <input name='username' value={this.state.username} onChange={this.handleInput}></input>
        <input name='password' type='password' value={this.state.password} onChange={this.handleInput}></input>
        <input name='remember' type='checkbox' checked={this.state.checkbox} onChange={this.handleInput}></input>
      </div>
    );
  }
}
