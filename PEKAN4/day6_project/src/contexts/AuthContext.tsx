import { createContext, useState,type ReactNode } from 'react'

interface AuthContextType {
  isAuth: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false)

  const login = () => setIsAuth(true)
  const logout = () => setIsAuth(false)

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
