/* Implement an UncontrolledLogin component
 that implements all the operations of the Login component, 
 but does so using uncontrolled components. */

import React, { createRef } from 'react';

export class UncontrolledLogin extends React.Component {
  _ref = createRef();

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

  render() {
    return (
      <div>
        <form ref={this._ref} onSubmit={this.submitForm}>
          <input name='username' />
          <input name='password' onChange={this.enableButton} type='password' />
          <input name='remember' onChange={this.enableButton} type='checkbox' />
          <button type='submit' onClick={() => this.props.actualState(this.state)} disabled={!this.state.enable}>
            Login
          </button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}
