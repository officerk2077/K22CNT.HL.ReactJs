import React, { Component } from 'react'

export default class NtkClassComp extends Component {
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Class Component Demo</h2>
        <h4>Welcome to, {this.props.fullName}</h4>
        <p>Company: {this.props.company}</p>        
      </div>
    )
  }
}
