/* Create a TodoList component that renders a ul tag 
with a li tag for each item contained in the items state variable.
 The items state variable should be an array of strings. 
 The TodoList component should also contain an input tag and a button.
  When the button is clicked, the event handler should add the value of the input tag to the items array.*/
import React from 'react';

export class TodoList extends React.Component {
  state = {
    items: [],
    todo: '',
  };

  handleInput = (event) => {
    const value = event.target.value;
    this.setState({
      todo: value,
    });
  };

  handleClick = () => {
    const { todo, items } = this.state;
    if (this.state.todo) {
      items.push(todo);
      this.setState({
        items: items,
      });
    }
  };

  render() {
    return (
      <div>
        <input name='todo' value={this.state.todo} onChange={this.handleInput} />
        <button onClick={this.handleClick}>Add new to-do</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
