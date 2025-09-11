import React, { Component } from 'react'

export default class Event1Comp extends Component {
eventHandleClick1 = () => {
    alert('Button 01 was clicked');
}
eventHandleClick2() {
    alert('Button 02 was clicked')
}
  render() {
    return (
      <div>
         <div className="List-group">
        <button type="button" className='btn btn-primary' onClick={this.eventHandleClick1()}>Button 01</button>
        <button type="button" className='btn btn-info' onClick={this.eventHandleClick2}>Button 02</button>
    </div>
      </div>
    );
  }
}
