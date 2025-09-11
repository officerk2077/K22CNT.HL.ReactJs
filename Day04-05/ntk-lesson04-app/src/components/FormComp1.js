import React, { Component } from 'react'

export default class FormComp1 extends Component {
constructor(props) {
    super(props);
    this.state = {
        studentName: ''
    };
};
handleChange = (event) => {
    this.setState(
        {
            studentName: event.target.value
        }
    );
};
handleSubmit = (event) => {
    alert('Tên sinh viên khi submit: ' + this.state.studentName);
    event.preventDefault();
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Student Name: <input type='text' value={this.state.studentName} onChange={this.handleChange}/>
        </label>
        <input type='submit' value='submit'/>
      </form>
    )
  }
}
