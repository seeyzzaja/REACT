import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuth } = useAuth()
  return isAuth ? children : <Navigate to="/login" replace />
}
