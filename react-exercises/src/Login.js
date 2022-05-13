/*Add a "login" button to the Login component.
 This button should be disabled as long as the username and password inputs are empty.
  When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component,
   passing it the state.*/

import React, { useState } from 'react';

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

  onLogin = (event) => {
    this.setState(() => {
      return { username: this.state.username, password: this.state.password };
    });
  };

  render() {
    return (
      <div>
        <input name='username' value={this.state.username} onChange={this.handleInput}></input>
        <input name='password' type='password' value={this.state.password} onChange={this.handleInput}></input>
        <input name='remember' type='checkbox' checked={this.state.checkbox} onChange={this.handleInput}></input>
        {(!this.state.username || !this.state.password) && <button disabled={true}>Login</button>}
        {this.state.username && this.state.password && <button onClick={this.onLogin}>Login</button>}
      </div>
    );
  }
}
