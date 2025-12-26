import type { Product } from "../types/Produk";

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

function ProductList({ products, onSelect }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - Rp{product.price}
          <button onClick={() => onSelect(product)}>
            Pilih
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
