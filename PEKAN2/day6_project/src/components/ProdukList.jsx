import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryFilter from './CategoryFilter';


function ListProduk() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToCart = () => setCartCount(prev => prev + 1);
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  const filterProduk = data.filter(item => {
    const matchCategory = category === 'all' || item.category === category;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (loading) return <p className="status-text">Loading...</p>;
  if (error) return <p className="status-text">Terjadi kesalahan</p>;

  return (
    <div className={`list-produk ${theme}`}>
     
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="cart-counter">
          🛒 {cartCount}
        </div>
        <button 
          onClick={toggleTheme} 
          style={{ padding: "10px 16px", borderRadius: "8px", cursor: "pointer" }}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </header>

      <h1>List Produk</h1>

    
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Cari produk"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>

      {filterProduk.length === 0 ? (
        <p className="status-text">Produk tidak ditemukan</p>
      ) : (
        <div className="produk-grid">
          {filterProduk.map(item => (
            <div className="produk-card" key={item.id}>
              <img src={item.image} alt={item.title} width={100} />
              <p className="produk-title">{item.title}</p>
              <p className="produk-price">${item.price}</p>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListProduk;
