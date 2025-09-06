import React, { Component } from 'react'

export default class NtkRenderList extends Component {
    constructor(props){
        super(props);
        this.state = {
            students:[
                { id: 1, name: "Nguyễn Trực Kiên", age: 21, gender:"Nam", email: "wwwkienamrio123@gmail.com", isActive: true},
                { id: 2, name: "Dương Thị Hà My", age: 20, gender:"Nữ", email: "myduong.301120@gmail.com", isActive: true},
                { id: 3, name: "Lê Văn Cường", age: 22, gender:"Nam", email: "cuong.le@example.com", isActive: false},
                { id: 4, name: "Phạm Thị Dung", age: 19, gender:"Nữ", email: "dung.pham@example.com", isActive: false},
                { id: 5, name: "Hoàng Văn Em", age: 20, gender:"Nam", email: "em.hoang@example.com", isActive: false}
            ],
        }
    }
  render() {
    return (
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
                        this.state.students.map((students, index)=>{
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
    )
  }
}
