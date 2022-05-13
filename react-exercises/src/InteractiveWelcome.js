/* Create an InteractiveWelcome component that renders
 an input tag and the Welcome component. 
 Pass the current content of the input tag to the name prop of the Welcome component. 
 The input tag should be a controlled component. */
import React from 'react';
import { Welcome } from './Welcome';

export class InteractiveWelcome extends React.Component {
  state = {
    input: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input name='input' value={this.state.input} onChange={this.handleInput}></input>
        <Welcome name={this.state.input} />
      </div>
    );
  }
}
