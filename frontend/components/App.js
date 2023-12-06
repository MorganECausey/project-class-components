import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Workout',
          id: Date.now(),
          completed: false
        }, 
      ]
    }
  }
  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
