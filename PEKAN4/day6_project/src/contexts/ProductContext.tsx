import { createContext, useState,type ReactNode } from 'react'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

interface ProductContextType {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductContext = createContext<ProductContextType | null>(null)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
