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

    if (loading) return <p>Đang tải dữ liệu...</p>

    // render data
    let renderUsers = userList.map((item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.fullname}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.status}</td>
            <td>
                <Link to={`/users/edit/${item.id}`} className="btn btn-success me-2">
                        Edit
                </Link>
                <a href='/users/add' className='btn btn-primary'>Thêm mới</a>
            </td>
            
        </tr>
    ))

    return (
        <div>
            <h2>Danh sách users</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fullname</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Status</th>
                        {/* <th>CRUD</th> */}
                    </tr>
                </thead>
                <tbody>
                    {renderUsers}
                </tbody>
            </table>
            
        </div>
    )
}
