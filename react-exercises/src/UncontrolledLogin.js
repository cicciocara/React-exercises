/* Modify the UncontrolledLogin component
 so that the username input is automatically focused
  when the component renders the first time.*/

import React, { createRef } from 'react';

export class UncontrolledLogin extends React.Component {
  _ref = createRef();
  _inputRef = createRef();

  state = {
    enable: false,
  };

  enableButton = () => {
    const username = this._ref.current.elements.username.value;
    const password = this._ref.current.elements.password.value;

    this.setState({
      enable: !!username && !!password,
    });

    // if (password && username) {
    //   this.setState({
    //     enable: true,
    //   });
    // }
  };

  submitForm = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.cheked;

    console.log(username, password, remember);
  };

  componentDidMount = () => {
    this._inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <form ref={this._ref} onSubmit={this.submitForm}>
          <input name='username' ref={this._inputRef} />
          <input name='password' onChange={this.enableButton} type='password' />
          <input name='remember' onChange={this.enableButton} type='checkbox' />
          <button type='submit' disabled={!this.state.enable}>
            Login
          </button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}
