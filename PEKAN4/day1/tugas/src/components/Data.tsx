import UserCard from "../components/UserCard";
import ProductList from "../components/ProdukList";
import Form from "../components/Form";
import type { Product } from "../types/Produk";

function Data() {
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 8000000 },
    { id: 2, name: "Mouse", price: 150000 }
  ];

  const handleSelectProduct = (product: Product) => {
    alert(`Produk dipilih: ${product.name}`);
  };

  return (
    <>
      <UserCard
        user={{ id: 1, name: "Budi", email: "budi@mail.com" }}
        isOnline={true}
      />

      <hr />

      <ProductList
        products={products}
        onSelect={handleSelectProduct}
      />

      <hr />

      <Form />
    </>
  );
}

export default Data
