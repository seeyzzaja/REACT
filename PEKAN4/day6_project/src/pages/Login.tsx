import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/dashboard')
  }

  return (
    <div className="center">
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
