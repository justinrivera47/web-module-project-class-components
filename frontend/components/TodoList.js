import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todo.map(todo => {
              return <Todo key={todo.id} todo={todo}/>
              })
          }
        </ul>
      </div>
    )
  }
}
