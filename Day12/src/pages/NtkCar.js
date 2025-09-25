import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function NtkCar() {
  const ntk_api = "https://68d359e0214be68f8c6588b2.mockapi.io/k22cnt_NguyenTrucKien_2210900033/cars";

  const [carList, setCarList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(ntk_api)
      .then((response) => {
        setCarList(response.data)
      })
      .catch((error) => {
        console.error("Có lỗi khi gọi API:", error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <h1>Đang tải dữ liệu...</h1>

  // xoá data
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá không?")) {
      axios
        .delete(`${ntk_api}/${id}`)
        .then(() => {
          // cập nhật danh sách sau khi xóa
          setCarList(carList.filter((u) => u.id !== id))
        })
        .catch((error) => {
          console.error("Có lỗi khi xoá:", error);
        })
    }
  }

  // render data
  let renderCar = carList.map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.tenxe}</td>
      <td>{item.namsx}</td>
      <td>{item.hang}</td>
      <td>{item.gia}</td>
      <td>{item.tocdo}</td>
      <td>{item.dongco}</td>
      <td>
        <Link to={`/car/edit/${item.id}`} className="btn btn-success me-2">Edit</Link>
        <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Xoá</button>
      </td>
    </tr>
  ))

  return (
    <div>
      <h2 className='alert alert-dark'>Danh sách xe</h2>
      <hr />
      <table className='table table-bordered text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên xe</th>
            <th>Năm sản xuất</th>
            <th>Hãng</th>
            <th>Giá</th>
            <th>Tốc độ tối đa</th>
            <th>Động cơ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderCar}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="8" className="text-center">
              <Link to='/car/add' className="btn btn-primary rounded-pill px-4">Thêm xe</Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
