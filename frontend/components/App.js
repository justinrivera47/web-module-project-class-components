import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  state = {
    todo:[
      {
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: true
      }
    ]
  }

  handleAdd = (todo) => {
      const newtodo = {
        name: todo,
        id: Date.now(),
        completed: false
      }
      this.setState({
        todo: [...this.state.todo, newtodo]
      })
  }

  toggleComplete = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todo={this.state.todo} toggleComplete={this.toggleComplete}/>
        <Form handleChange={this.handleChange} handleAdd={this.handleAdd}/>
      </div>
    )
  }
}
