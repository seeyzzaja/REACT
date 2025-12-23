import axios from "axios";
import { useEffect, useState } from "react";
import useCart from "../Hooks/UseCart";

function FatchProduk() {
  const { addToCart } = useCart();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, []);

  if (loading) return <p className="center">Sedang memuat data...</p>;
  if (error) return <p className="center">Terjadi kesalahan</p>;

  const filtered = data.filter((item) => {
    const matchCategory = category === "all" || item.category === category;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });
  

  return (
    <div className="product-container">
      <h1 className="title">mini E-Commerce</h1>
    
      <div className="product-filter">
        <input
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Semua</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FatchProduk;
