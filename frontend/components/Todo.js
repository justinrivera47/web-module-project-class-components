import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li onClick={this.props.toggleComplete} key={this.props.todo.id}>{this.props.todo.name}{this.props.todo.completed ? <span> ✔</span> : <span></span>}</li>
      </div>
    )
  }
}
