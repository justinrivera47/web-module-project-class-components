import React from 'react'

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
        completed: false
      }
    ]
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.state.todo.map(todo => {
              return <li key={todo.id}>{todo.name}<span>{todo.completed}</span></li>
              }
            )
          }
        </ul>
        <form>
          <input />
          <button>Submit</button>
        </form>
        <button>Clear Button</button>
      </div>
    )
  }
}
