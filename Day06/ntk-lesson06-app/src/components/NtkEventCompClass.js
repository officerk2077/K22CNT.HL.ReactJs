import React, { Component } from 'react'

export default class NtkEventCompClass extends Component {
    ntk_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    ntk_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.ntk_Func1}>Click</button>
                <button onClick={()=>this.ntk_Func2("Nguyễn Trực Kiên")}>Click Param</button>
            </div>
        );
    }
}
