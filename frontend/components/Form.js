import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
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
