import React from 'react'

export default class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          name='input' 
          placeholder='add todo'
          onChange={this.props.handleChange}
          />
          <button>Submit</button>
        </form>
        <button>Clear Button</button>
      </div>
    )
  }
}
