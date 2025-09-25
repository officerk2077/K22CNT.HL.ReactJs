import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function NtkUser() {
    const ntk_api = "https://68d359e0214be68f8c6588b2.mockapi.io/k22cnt_NguyenTrucKien_2210900033/user";

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(ntk_api)
            .then((response) => {
                setUserList(response.data)
            })
            .catch((error) => {
                console.error("Có lỗi khi gọi API:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return <h1>Đang tải dữ liệu...</h1>

    // render data
    let renderUsers = userList.map((item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.fullname}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.status}</td>
            <td>
                <Link to={`/users/edit/${item.id}`} className="btn btn-success me-2">Edit</Link>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Xoá</button>
            </td>
        </tr>
    ))
    // xoá data
    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xoá không?")) {
            axios
            .delete(`${ntk_api}/${id}`)
            .then(()=>{
                //cap nhat danh sach sau khi xoa
                setUserList(userList.filter((u) => u.id !== id))
            })
            .catch((error)=>{
                console.error("co loi khi xoa:", error);
                
            })
        }
    }
    return ( 
        <div>
            <h2 className='alert alert-dark'>Danh sách users</h2>
            <hr />
            <table className='table table-bordered text-center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fullname</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Status</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers}
                </tbody>
                <tfoot>
                    <tr>
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
