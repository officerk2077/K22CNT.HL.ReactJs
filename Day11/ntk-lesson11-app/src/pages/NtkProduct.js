import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NtkProduct() {
  const products = [
    {id:1, name:"GT-R"},
    {id:2, name:"Lancer EVO X"},
    {id:3, name:"370Z"},
  ]
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <hr/>
      <ul>
        {
          products.map((p)=>(
            <li>
              <Link to={`/products/${p.id}`}>{p.name}</Link>
            </li>
          ))
        }
        <hr/>
        <Outlet/>
      </ul>
    </div>
  )
}
