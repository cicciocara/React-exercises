/* Create a Container component that renders
 its children within a div tag. 
 Have the div tag use a white background and a red border,
  either with a custom class or by using tailwindcss. */
import React from 'react';

export class Container extends React.Component {
  render() {
    return <div className='componentStyle'>{this.props.children}</div>;
  }
}
