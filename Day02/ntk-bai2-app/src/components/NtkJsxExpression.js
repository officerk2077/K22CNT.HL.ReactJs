import React from 'react'

export default function NtkJsXExpression() {
  // Biến
  const name="Ntk - K22"
  // Biến đối tượng
  const user = {
    firstName: "Nguyễn Trực",
    lastName: "Kiên"
  }
  // Hàm
  const formatName = (param)=>{
    return "<h2> Welcome to, " + param.firstName + " " + param.lastName + "<h2/>";
  }
  // element
  const element = <h2>Welcome to, {user.firstName} {user.lastName}</h2>
  // function-element
  const formatFullName = (param)=>{
    return <h2>Welcome to, {param.firstName} {param.lastName}</h2>
  }

  return (
    <div>
      <h2>Biểu thức Jsx</h2>
      <hr/>
      {/* Su dung bien */}
      <p>Giá trị biến name: {name}</p>
      <div>
        Họ và tên: {user.firstName} {user.lastName}
      </div>
      <p>{formatName(user)}</p>
      {element}
      {formatFullName(user)}
    </div>
  )
}
