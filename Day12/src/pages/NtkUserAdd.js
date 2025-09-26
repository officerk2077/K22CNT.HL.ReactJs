import React, { useState } from 'react'
import axios from 'axios';
import '../form.css'
import { useNavigate } from 'react-router-dom';
export default function NtkUserAdd() {
    const navigate = useNavigate();
    const ntk_api = "https://68d359e0214be68f8c6588b2.mockapi.io/k22cnt_NguyenTrucKien_2210900033/user";


    const [form, setForm] = useState({
        fullname: "",
        username: "",
        password: "",
        status: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios
        .post(ntk_api, form)
        .then((res) => {
            alert("Thêm user thành công!");
            console.log("User vừa thêm:", res.data);
            navigate("/users")
        })
        .catch((err) => {
            console.error("Lỗi khi thêm user:", err);
        });
    }

  return (
    <div className="form-container">
    <h2>Thêm user</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Fullname:</label>
            <input
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Username:</label>
            <input
                name="username"
                value={form.username}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Status:</label>
            <input
                name="status"
                value={form.status}
                onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn-submit">Thêm User</button>
    </form>
    </div>
  )
}
