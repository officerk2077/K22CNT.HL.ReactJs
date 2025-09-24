import React from 'react'

export default function NtkStudentInfo() {
    const student = {
        masv: "2210900033",
        hoten: "Nguyễn Trực Kiên",
        lop: "K22CNT3",
        ngaysinh: "10/03/2004",
        sdt: "0363789548",
        email: "truckien626@gmail.com"
    }
  return (
    <div>
        <h2 className='text-center'>Thông tin sinh viên</h2>
        <ul className='alert alert-success'>
            <li>Mã sv: {student.masv}</li>
            <li>Họ tên: {student.hoten}</li>
            <li>Lớp: {student.lop}</li>
            <li>Ngày sinh: {student.ngaysinh}</li>
            <li>Số điện thoại: {student.sdt}</li>
            <li>Email: {student.email}</li>
        </ul>
    </div>
  )
}
