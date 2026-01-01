import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import { useTheme } from './hooks/useTheme'
import './App.css'

export default function App() {
  const { toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
