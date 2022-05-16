/*Add a "reset" button to the Login component that clears 
the content of all three inputs when clicked.*/

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

  onLogin = () => {
    this.setState(() => {
      return { username: this.state.username, password: this.state.password };
    });
  };

  handleReset = () => {
    this.setState({
      username: '',
      password: '',
      remember: false,
    });
  };

  render() {
    return (
      <div>
        <input name='username' value={this.state.username} onChange={this.handleInput}></input>
        <input name='password' type='password' value={this.state.password} onChange={this.handleInput}></input>
        <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleInput}></input>
        {(!this.state.username || !this.state.password) && <button disabled={true}>Login</button>}
        {this.state.username && this.state.password && <button onClick={this.onLogin}>Login</button>}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}