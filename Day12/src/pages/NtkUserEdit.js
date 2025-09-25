import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function NtkUserEdit() {
    const navigate = useNavigate();
    const ntk_api = "https://68d359e0214be68f8c6588b2.mockapi.io/k22cnt_NguyenTrucKien_2210900033/user/";

    const { id } = useParams(); 
    
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        password: "",
        status: "",
    });

    useEffect(()=>{
         axios
      .get(ntk_api+`${id}`)
      .then((res) => {
        // Ở thực tế, API backend của bạn sẽ trả về đủ dữ liệu
        setForm({
          fullname: res.data.fullname || "",
          username: res.data.username || "",
          password: res.data.password || "",
          status: res.data.status || 0,
        });
      })
      .catch((err) => {
        console.error("Lỗi khi load user:", err);
      });
    },[id])

    const handleChange = (e)=>{
         setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios
        .put(ntk_api + `${id}`, form)
        .then((res) => {
            alert("Cập nhật user thành công!");
            console.log("User vừa thêm:", res.data);
            navigate("/users"); // Quay lại danh sách users
        })
        .catch((err) => {
            console.error("Lỗi khi thêm user:", err);
        });
    }
    
  return (
    <div className="form-container">
        <h2>Sửa user</h2>
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
            <button type="submit" className="btn-submit">Sửa User</button>
        </form>
    </div>

  )
}
