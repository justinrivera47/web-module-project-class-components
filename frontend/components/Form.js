import React from 'react'

export default class Form extends React.Component {

  state = {
    input: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAdd(this.state.input)
    this.setState({ 
      ...this.state,
      input: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          value={this.state.input}
          placeholder='add todo'
          onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <button>Clear Button</button>
      </div>
    )
  }
}
