import { Link } from 'react-router-dom'
import type { Product } from '../contexts/ProductContext'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} width={100} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>Detail</Link>
    </div>
  )
}
