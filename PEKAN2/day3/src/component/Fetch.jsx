import { useState, useEffect } from "react";

export default function FetchSimulation() {
  const [data, setData] = useState(null);      // tempat menyimpan data
  const [loading, setLoading] = useState(true); // state loading

  useEffect(() => {
    console.log("Komponen di-mount, mulai fetch...");

    // simulasi fetch API (delay 2 detik)
    setTimeout(() => {
      const fakeData = {
        id: 1,
        name: "Produk Contoh",
        price: 50000
      };

      setData(fakeData);   // set data
      setLoading(false);   // matikan loading
      console.log("Data berhasil diambil:", fakeData);
    }, 2000);

  }, []); // [] = hanya dijalankan sekali saat mount

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simulasi Fetch Data</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h3>{data.name}</h3>
          <p>ID: {data.id}</p>
          <p>Harga: Rp {data.price}</p>
        </div>
      )}
    </div>
  );
}
