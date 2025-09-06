import React, { Component } from 'react'
import NtkFuncComp from './components/NtkFuncComp'
import NtkClassComp from './components/NtkClassComp'
import NtkRenderList from './components/NtkRenderList'

export default class NtkApp extends Component {
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
      <div className='container border'>
        <h1>Nguyễn Trực Kiên</h1>
        <h2>Ôn tập: Component / Props / State / Render ListKey</h2>
        <hr/>
        <NtkFuncComp/>
        <hr/>
        <NtkFuncComp fullName="Nguyễn Trực Kiên" address="PY" email="truckien626@gmail.com"></NtkFuncComp>
        <hr/>
        <NtkClassComp/>
        <hr/>
        <NtkClassComp name="Trực Kiên" age="21" phone="0363789548" email="kienk103@badinh.in"></NtkClassComp>
        <hr/>
        <NtkRenderList/>
      </div>
    )
  }
}
