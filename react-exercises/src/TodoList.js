/* Modify the TodoList by adding a "remove" button to each li tag.
 When clicked, the event handler 
 should remove corresponding item from the items array.*/
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

  handleReset = () => {
    this.setState({
      items: [],
    });
  };

  handleRemove = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div>
        <input name='todo' value={this.state.todo} onChange={this.handleInput}></input>
        <button onClick={this.handleClick}>Add to-do</button>
        <button onClick={this.handleReset}>Reset</button>
        <ul>
          {this.state.items.map((item, index) => (
            <div>
              <li key={index}>
                {item} <button onClick={() => this.handleRemove(index)}>Remove</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
