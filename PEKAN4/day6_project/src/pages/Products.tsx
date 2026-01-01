import { useEffect, useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const { products, setProducts } = useProducts()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setError('Gagal memuat produk'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
