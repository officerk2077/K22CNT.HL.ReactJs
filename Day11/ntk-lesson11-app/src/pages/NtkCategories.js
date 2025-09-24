import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function NtkCategories() {
    const ntk_api ="http://apixm.devmaster.vn/api/Categories/"
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios
            .get(ntk_api)
            .then((response) => {
                setCategories(response.data); // Lưu dữ liệu vào state
            })
        .catch((error) => {
            console.error("Có lỗi khi gọi API:", error);
        })
    },[])
  return (
    <div>
      Danh sách loại sản phẩm
      <hr/>
      <ul>
        {
            categories.map((item,index)=>{
                return <li>{item.title}</li>
            })
        }
      </ul>
    </div>
  )
}
