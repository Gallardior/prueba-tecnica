import { useState, useContext } from "react"
import {getLogin} from "../../services/login" 
import AuthContext from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export function LoginForm () {
  let navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {isLogin, setIsLogin} = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    getLogin({user, password})
      .then(response => {
        setIsLogin(response)
        navigate("/employees", { replace: true })
      })
      .catch(error => {
        alert("Nombre de usuario o contraseña incorrectos")
        setIsLogin(false)
      })
  }

  const handleUser = e => {
    setUser(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleCopyPaste = e => {
    e.preventDefault()
  }

  return(
    <form className="grid gap-4 lg:w-3/12 mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="user" className="font-medium" >User</label>
      <input 
        className="px-4 py-2 border shadow-sm" 
        id="user" 
        name="user" 
        onChange={handleUser} 
        onCopy={handleCopyPaste} 
        onPaste={handleCopyPaste} 
        required
        type="text" 
        value={user} 
      />
      
      <label htmlFor="password" className="font-medium" >Password</label>
      <input 
        className="px-4 py-2 border shadow-sm" 
        id="password" 
        name="password" 
        onChange={handlePassword} 
        onCopy={handleCopyPaste} 
        onPaste={handleCopyPaste} 
        required
        type="password" 
        value={password} 
      />
      <button type="submit" className="px-4 py-2 bg-purple-500 text-white font-semibold">Login</button>
    </form>
  )
}