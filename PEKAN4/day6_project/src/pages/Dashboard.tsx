import { useProducts } from '../hooks/useProducts'
import { useCallback } from 'react'

export default function Dashboard() {
  const { products, setProducts } = useProducts()

  const deleteProduct = useCallback((id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }, [])

  return (
    <>
      <h2>Dashboard Admin</h2>
      {products.map(p => (
        <div key={p.id} className="row">
          {p.title}
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}
