import React, { useState } from 'react'

export default function NtkCar() {
  const [car, setCar] = useState([
      { maxe: "car001", tenxe: "Lamborghini Aventador", namsx: 2022, hang: "Lamborghini", gia: "1500000 USD", dongco: "V12 6.5L", tocdo: "350 km/h" },
      { maxe: "car002", tenxe: "Ferrari SF90 Stradale", namsx: 2021, hang: "Ferrari", gia: "1200000 USD", dongco: "V8 4.0L Hybrid", tocdo: "340 km/h" },
      { maxe: "car003", tenxe: "Porsche 911 Turbo S", namsx: 2020, hang: "Porsche", gia: "200000 USD", dongco: "Flat-6 3.8L Twin-Turbo", tocdo: "330 km/h" },
      { maxe: "car004", tenxe: "Bugatti Chiron", namsx: 2019, hang: "Bugatti", gia: "3000000 USD", dongco: "W16 8.0L Quad-Turbo", tocdo: "420 km/h" },
      { maxe: "car005", tenxe: "McLaren 720S", namsx: 2021, hang: "McLaren", gia: "300000 USD", dongco: "V8 4.0L Twin-Turbo", tocdo: "341 km/h" },
      { maxe: "car006", tenxe: "Aston Martin Valkyrie", namsx: 2022, hang: "Aston Martin", gia: "3200000 USD", dongco: "V12 6.5L Hybrid", tocdo: "354 km/h" }

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
        setCar([...car, form]);
        setForm({maxe: "", tenxe: "", namsx: "", hang: "", gia: "", tocdo: "", dongco: ""});
    };
  return (
    <div>
      <h2 className='text-center alert alert-success'>Danh sách xe</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Mã xe</th>
                    <th>Tên xe</th>
                    <th>Năm sản xuất</th>
                    <th>Hãng</th>
                    <th>Giá</th>
                    <th>Tốc độ tối đa</th>
                    <th>Động cơ</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {car.map((xe, index) => (
                    <tr key={index}>
                        <td>{xe.maxe}</td>
                        <td>{xe.tenxe}</td>
                        <td>{xe.namsx}</td>
                        <td>{xe.hang}</td>
                        <td>{xe.gia}</td>
                        <td>{xe.tocdo}</td>
                        <td>{xe.dongco}</td>
                        <td className='text-center'>
                          <a className='btn btn-success me-2'>Add</a>
                          <a className='btn btn-primary'>Edit</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h3 className='text-center alert alert-danger' name='addForm'>Thêm mới xe</h3>
        <form onSubmit={handleSubmit}>
            <input name='maxe' placeholder='Mã xe' value={form.maxe} onChange={handleChange}/> <br/>
            <input name='tenxe' placeholder='Tên xe' value={form.tenxe} onChange={handleChange}/> <br/>
            <input name='namsx' placeholder='Năm sản xuất' value={form.namsx} onChange={handleChange}/> <br/>
            <input name='hang' placeholder='Hãng' value={form.hang} onChange={handleChange}/> <br/>
            <input name='gia' placeholder='Giá' value={form.gia} onChange={handleChange}/> <br/>
            <input name='tocdo' placeholder='Tốc độ tối đa' value={form.tocdo} onChange={handleChange}/> <br/>
            <input name='dongco' placeholder='Động cơ' value={form.dongco} onChange={handleChange}/> <br/>
            <button type="submit" className='btn btn-primary'>Thêm</button>
        </form>
    </div>
  )
}
