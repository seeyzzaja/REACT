import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

export const useProducts = () => {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProducts must be used inside ProductProvider')
  return ctx
}
