import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export function Header () {
  const {isLogin, setIsLogin} = useContext(AuthContext)
  let navigate = useNavigate()

  const handleLogOut = () => {
    sessionStorage.setItem('is-login', '')
    setIsLogin(false)
    navigate("/login", { replace: true })
  }

  return (
    <header className='border-b shadow-md bg-purple-500 text-white'>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className='lg:text-2xl font-bold'>My App</Link>
        <nav className="text-sm font-medium flex gap-5">
          {
            isLogin
              ? <button onClick={handleLogOut}>Logout</button>
              : <Link to="/login">Login</Link>
          }
          <Link to="/employees">Employees</Link>
          <Link to="/upload">Upload</Link>
        </nav>
      </div>
    </header>
  )
}