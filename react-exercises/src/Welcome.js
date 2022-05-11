import React from 'react';
import { Age } from './Age';

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        <Age>{this.props.age}</Age>
      </div>
    );
  }
}
