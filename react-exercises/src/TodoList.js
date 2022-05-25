/*Modify the TodoList component so that,
instead of rendering the items array within the ul tag, 
it calls the function passed to its render prop,
passing it the items array as a parameter,
as well as the function required to delete the item. 
Pass a render prop to the TodoList component to correctly render and interact with the items array.*/

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
          {/* {this.state.items.map((item, index) => (
            <div>
              <li key={index}>
                {item} <button onClick={() => this.handleRemove(index)}>Remove</button>
              </li>
            </div>
          ))} */}
          {this.props.render(this.state.items, this.handleRemove)}
        </ul>
      </div>
    );
  }
}
