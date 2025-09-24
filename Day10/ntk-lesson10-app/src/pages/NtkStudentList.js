import React, { useState } from 'react'

export default function NtkStudentList() {
    const [student, setStudent] = useState([
        { masv: "2210900033", hoten: "Nguyễn Trực Kiên", tuoi: 21, ngaysinh: "10/03/2004", diachi: "Phúc Yên", sdt: "0363789548", email: "truckien626@gmail.com" },
    { masv: "2210900030", hoten: "Dương Thị Hà My", tuoi: 20, ngaysinh: "30/11/2004", diachi: "Dĩ An", sdt: "0394271569", email: "myduong.301120@gmail.com" },
    ]);

    const [form, setForm] = useState({
        masv: "",
        hoten: "",
        tuoi: "",
        ngaysinh: "",
        diachi: "",
        dienthoai: "",
        email: "",
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudent([...student, form]);
        setForm({masv: "", hoten: "", tuoi: "", ngaysinh: "", diachi: "", dienthoai: "", email: ""});
    };
  return (
    <div>
        <h2 className='text-center alert alert-success'>Danh sách sinh viên</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Mã sinh viên</th>
                    <th>Họ tên</th>
                    <th>Tuổi</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {student.map((sv, index) => (
                    <tr key={index}>
                        <td>{sv.masv}</td>
                        <td>{sv.hoten}</td>
                        <td>{sv.tuoi}</td>
                        <td>{sv.ngaysinh}</td>
                        <td>{sv.diachi}</td>
                        <td>{sv.sdt}</td>
                        <td>{sv.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h3 className='text-center alert alert-danger'>Thêm mới sinh viên</h3>
        <form onSubmit={handleSubmit}>
            <input name='masv' placeholder='Mã SV' value={form.masv} onChange={handleChange}/> <br/>
            <input name='hoten' placeholder='Họ tên' value={form.hoten} onChange={handleChange}/> <br/>
            <input name='tuoi' placeholder='Tuổi' value={form.tuoi} onChange={handleChange}/> <br/>
            <input name='ngaysinh' placeholder='Ngày sinh' value={form.ngaysinh} onChange={handleChange}/> <br/>
            <input name='diachi' placeholder='Địa chỉ' value={form.diachi} onChange={handleChange}/> <br/>
            <input name='sdt' placeholder='Số điện thoại' value={form.sdt} onChange={handleChange}/> <br/>
            <input name='email' placeholder='Email' value={form.email} onChange={handleChange}/> <br/>
            <button type="submit" className='btn btn-primary'>Thêm</button>
        </form>
    </div>
  );
}
