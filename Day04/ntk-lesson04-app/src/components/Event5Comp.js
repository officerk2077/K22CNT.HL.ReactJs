import React, { Component } from 'react'

export default class Event5Comp extends Component {
eventLinkHandle = (e) => {
    e.preventDefault();
    alert('Link was clicked');
}
  render() {
    return (
      <div className='list-group'>
        <a name='' id='' className='btn btn-primary' href='https://www.facebook.com/Namelessking2077/' onClick={this.eventLinkHandle} role='button'>Link</a>

      </div>
    )
  }
}
