import AuthContext from "../../context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"

export function Login () {
  const {isLogin} = useContext(AuthContext)

  if(isLogin) return <Navigate to="/" replace={true}/> 

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <LoginForm />
    </section>
  )
}