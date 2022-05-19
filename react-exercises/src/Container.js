/* Modify the Container component 
so that it can display a title 
received within the title prop. */

import React from 'react';

export class Container extends React.Component {
  render() {
    return (
      <div className='componentStyle'>
        {<h3>{this.props.title}</h3>}
        {this.props.children}
      </div>
    );
  }
}
