import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../form.css'
import { useNavigate, useParams } from 'react-router-dom';
export default function NtkCarEdit() {
    const navigate = useNavigate();
    const ntk_api = "https://68d359e0214be68f8c6588b2.mockapi.io/k22cnt_NguyenTrucKien_2210900033/cars";

    const { id } = useParams(); 

     const [form, setForm] = useState({
        tenxe: "",
        namsx: "",
        hang: "",
        gia: "",
        tocdo: "",
        dongco: "",
    });

    useEffect(()=>{
        axios
        .get(ntk_api+`${id}`)
        .then((res)=>{
            setForm({
                tenxe: res.data.tenxe || "",
                namsx: res.data.namsx || "",
                hang: res.data.hang || "",
                gia: res.data.gia || "",
                tocdo: res.data.tocdo || "",
                dongco: res.data.dongco || "",
            });
        })
        .catch((err)=>{
            console.error("Lỗi khi load car:", err); 
        });
    },[id])

    const handleChange = (e) => {
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
            alert("Cập nhật xe thành công!");
            console.log("Xe vừa thêm:", res.data);
            navigate("/car"); // Quay lại danh sách users
        })
        .catch((err) => {
            console.error("Lỗi khi thêm xe:", err);
        });
    }

  return (
    <div className="form-container">
    <h2>Thêm xe</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Tên xe:</label>
            <input
                name="tenxe"
                value={form.tenxe}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Năm sản xuất:</label>
            <input
                name="namsx"
                value={form.namsx}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Hãng:</label>
            <input
                name="hang"
                value={form.hang}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Giá</label>
            <input
                name="gia"
                value={form.gia}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Tốc độ tối đa</label>
            <input
                name="tocdo"
                value={form.tocdo}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Động cơ</label>
            <input
                name="dongco"
                value={form.dongco}
                onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn-submit">Sửa</button>
    </form>
    </div>
  )
}
