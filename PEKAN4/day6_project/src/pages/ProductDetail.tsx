import { useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const { products } = useProducts()

  const product = products.find(p => p.id === Number(id))
  if (!product) return <p>Produk tidak ditemukan</p>

  return (
    <div className="detail">
      <img src={product.image} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <strong>${product.price}</strong>
      </div>
    </div>
  )
}
