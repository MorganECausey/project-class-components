import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';

function generateUniqueId() {
  return Date.now();
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Workout',
          id: generateUniqueId(),
          completed: false
        }, 
        {
          name: 'Buy groceries',
          id: generateUniqueId(),
          completed: false
        },
        {
          name: 'Give the dogs their baths',
          id: generateUniqueId(),
          completed: false
        }
      ]
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(element => {
        return (element.completed === false);
    })
  });
  }

  handleAdd = (value) => {
    this.setState({
      ...this.state,
      todos: [this.state.todos, {
        name: value,
        id: generateUniqueId(),
        completed: false
      }]
    })
  }

  handleToggle = (clickedID) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(element => {
        if (element.id === clickedID) {
        return ({
          ...element,
          completed: !element.completed
        })
      }
      return element;
      })
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos={todos} handleToggle={this.handleToggle}></TodoList>
        <TodoForm handleAdd={this.handleAdd}></TodoForm>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
