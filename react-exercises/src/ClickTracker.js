import React from 'react';

export class ClickTracker extends React.Component {
  state = {
    lastOne: 'no-pressed yet',
  };

  handleClick = (event) => {
    const lastPressed = event.target.name;
    this.setState({
      lastOne: lastPressed,
    });
  };
  render() {
    return (
      <div>
        <h1>Last Pressed: {this.state.lastOne}</h1>
        <button name='First Button' onClick={this.handleClick}>
          First Button
        </button>
        <button name='Second Button' onClick={this.handleClick}>
          Second Button
        </button>
        <button name='Third Button' onClick={this.handleClick}>
          Third Button
        </button>
      </div>
    );
  }
}
