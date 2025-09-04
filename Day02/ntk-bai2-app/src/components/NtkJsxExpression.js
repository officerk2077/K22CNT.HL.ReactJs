import React from 'react'

export default function NtkJsxExpression() {

    const name="Ntk - K22"

    const user={
        firstName: "Nguyễn Trực"
        lastName: "Kiên"
    }
  return (
    <div>
        <h2>Biểu thức Jsx</h2>
    <hr/>
    {/* sử dụng biến */}
    <p>Giá trị biến name: {name}</p>
    <div>
        Họ và tên: {user.firstName} {user.lastName}
    </div>
    </div>
  )
}
