import React, { Component } from 'react'

export default class FormComp2 extends Component {
constructor(props) {
    super(props);
    this.state = {
        course: ''
    };
};
handleChange = (event) => {
    this.setState(
        {
            course: event.target.value
        }
    );
};
handleSubmit = (event) => {
    alert('Khoá học đã chọn khi submit: ' + this.state.course);
    event.preventDefault();
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            chọn khoá học:
            <select value={this.state.course} onChange={this.handleChange}>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='js'>Javascript</option>
            <option value='reactjs'>ReactJS</option>
            </select>
        </label>
        <input type='submit' value='submit'/>
      </form>
    )
  }
}
