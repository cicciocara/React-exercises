import React from 'react';

export class Age extends React.Component {
  render() {
    return <div>{this.props.children > 18 ? <p>Your age is {this.props.children}</p> : <p>You are very young!</p>}</div>;
  }
}
