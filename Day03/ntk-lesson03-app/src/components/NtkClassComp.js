import React, { Component } from 'react'

export default class NtkClassComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:"Kien",
      lastName:"Truc",
      course:"ReactJs",
      marks:[
        {"toán":"10"},
        {"văn":"9"},
        {"Anh":"8"},
      ]
    }
  }
  render() {
    return (
      <div className='alert alert-danger'>
            <h2>Demo Class Component</h2>
            <div>
                <p>Đọc dữ liệu từ props</p>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Phone: {this.props.phone}</p>
                <p>Email: {this.props.email}</p>
            </div>
            <div>
              <h3>Đọc dữ liệu từ state </h3>
              <p>Fullname: {this.state.firstName} {this.state.lastName}</p>
              <p>Course: {this.state.course}</p>
              <p>Marks: {this.state.marks.toString()}</p>
            </div>
      </div>
    );
  }
}
