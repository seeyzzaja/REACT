function ProductListData() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ];
  return (
    <div style={{background: "blueviolet", padding: "20px", borderRadius: "8px", color: "white"}}>
      <h2>Daftar Produk</h2>
    {products.length === 0 ? (<p> Produk Tidak Tersedia</p>)
        :
    (<ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>) }
    </div>
  );
}

export default ProductListData;
