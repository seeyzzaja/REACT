import { useState } from "react";
import FatchProduk from "./FatchProduk";
import ProductList from "../pages/MapProduk";
import ProductFilter from "../pages/FilterProduk";

function ProductsPage() {
  const { products, loading, error } = FatchProduk();
  const [category, setCategory] = useState("");

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  if (loading)
    return (
      <div className="page-center">
        <h2>List Produk</h2>
        <p className="loading-text">Sedang memuat data...</p>
      </div>
    );

  if (error)
    return (
      <div className="page-center">
        <h2>List Produk</h2>
        <p className="error-text">Terjadi kesalahan</p>
      </div>
    );
  if (loading)
    return (
      <div className="page-center">
        <h2>List Produk</h2>
        <p className="loading-text">Sedang memuat data...</p>
      </div>
    );

  if (error)
    return (
      <div className="page-center">
        <h2>List Produk</h2>
        <p className="error-text">Terjadi kesalahan</p>
      </div>
    );

  return (
    <>
      <ProductFilter onFilter={setCategory} />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default ProductsPage;
