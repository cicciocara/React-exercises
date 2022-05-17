/* Modify the TodoList component 
so that the input clears 
every time a Todo is added to the items array.*/
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
        todo: '',
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
