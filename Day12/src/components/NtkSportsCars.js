import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NtkSportsCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = "https://68d359e0214be68f8c6588b2.mockapi.io/k22cnt_NguyenTrucKien_2210900033/cars";

  useEffect(() => {
    axios.get(api)
      .then(res => {
        setCars(res.data);
      })
      .catch(err => {
        console.error("Lỗi khi gọi API:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Đang tải dữ liệu...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {cars.map(car => (
          <div key={car.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
          }}>
            <img
              src={car.image.startsWith("http") ? car.image : `/assets/${car.image}`}
              alt={car.tenxe}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
              onError={(e) => { e.target.src = "https://via.placeholder.com/300x180?text=No+Image"; }}
            />
            <h3 style={{ padding: "10px" }}>{car.tenxe}</h3>
            <p>Năm SX: {car.namsx}</p>
            <p>Hãng: {car.hang}</p>
            <p>Giá: {car.gia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
