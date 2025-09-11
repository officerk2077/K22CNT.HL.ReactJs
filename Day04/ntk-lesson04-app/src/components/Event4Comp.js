import React, { Component } from 'react'

export default class Event4Comp extends Component {
constructor(props) {
    super(props);
    this.state = {
        name: 'Nguyễn Trực Kiên',
        job: 'Dev Soft'
    };
}
changeState = () => {
    this.setState(
        {
            name: 'Dương Thị Hà My',
            job: 'Dev soft'
        }
    );
    alert('Name: ' + this.state.name + 'job: ' + this.state.job);
}
  render() {
    return (
      <div className='list-group'>
        {/* Function với state */}
        <button type='button' className='btn btn -primary' onClick={this.changeState}>Button 01</button>

      </div>
    )
  }
}
