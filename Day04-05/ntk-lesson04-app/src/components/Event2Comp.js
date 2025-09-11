import React, { Component } from 'react'

export default class Event2Comp extends Component {
eventHandleClick1 = (content1) => {
    alert('Button 01 was clicked');
}
eventHandleClick2(content2) {
    alert('Button 02 was clicked')
}
  render() {
    return (
      <div>
         <div className="List-group">
        {/* Function được gọi khi render */}
        <button type="button" className='btn btn-primary' onClick={this.eventHandleClick1()}>Button 01</button>
        {/* Function được gọi khi click button - gọi arrow function */}
        <button type="button" className='btn btn-info' onClick={this.eventHandleClick2}>Button 02</button>
    </div>
      </div>
    );
  }
}
