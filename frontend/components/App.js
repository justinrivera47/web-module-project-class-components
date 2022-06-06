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
    ],
    input: '' 
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      input: e.target.value
    })
  }


  render() {
    return (
      <div>
        <TodoList todo={this.state.todo}/>
        <Form handleChange={this.handleChange}/>
      </div>
    )
  }
}
