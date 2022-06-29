import { createContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider ({children}) {
  const loginFromCache = Boolean(sessionStorage.getItem('is-login'))
  const [isLogin, setIsLogin] = useState(loginFromCache || false)

  return(
    <AuthContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext