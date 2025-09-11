import React, { Component } from 'react'

export default class Event3Comp extends Component {
constructor(props) {
    super(props)
    this.eventHandleClick3 = this.eventHandleClick3.bind(this);
}
eventHandleClick1 = () => {
    alert(this.props.name1);
}
eventHandleClick2(){
    alert(this.props.name2);
}
eventHandleClick3(){
    alert(this.props.name3);
}
  render() {
    return (
       <div className="List-group">
        {/* Khai báo arrow function */}
        <button type="button" className='btn btn-primary' onClick={this.eventHandleClick1}>Button 01</button>
        {/* Gọi function - arrow function */}
        <button type="button" className='btn btn-info' onClick={this.eventHandleClick2()}>Button 02</button>
        {/* bind this cho function ở constructor */}
        <button type="button" className='btn btn-success' onClick={this.eventHandleClick3}>Button 03</button>

    </div>
    );
  }
}
