import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Navigate } from "react-router-dom"

export function NotFount () {
  const {isLogin} = useContext(AuthContext)

  return <>
    {
      isLogin
        ? <Navigate to="/employees" replace={true} />
        : <Navigate to="/" replace={true} />
    }
  </>
}