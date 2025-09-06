import React, { Component } from 'react'

export default class NtkListStudents extends Component {
  render() {
    let {students} = this.props;
    return (
      <div>
        <div>
            <h2>Danh Sách sinh viên</h2>
            <hr/>
            <table className='table table-bordered'> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((students, index)=>{
                            return (
                            <tr key={index}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
                                <td>{students.age}</td>
                                <td>{students.gender}</td>
                                <td>{students.email}</td>
                                <td>{students.isActive?'Hoạt động':'Khoá'}</td>
                                <td>
                                    <button>Xem</button>
                                    <button>Sửa</button>
                                    <button>Xoá</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
      </div>
      </div>
    )
  }
}
