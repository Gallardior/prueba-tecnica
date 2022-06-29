import { HashRouter, Route, Routes, Navigate } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Employees } from "./pages/Employees/Employees"
import { Upload } from "./pages/Upload/Upload"
import { NotFount } from "./pages/404/404"
import { AuthProvider } from "./context/AuthContext"
import { EmployeesProvider } from "./context/EmployeesContext"

function App() {

  return (
    <div className="App bg-gray-100 bg-opacity-30 min-h-screen">
      <AuthProvider>
      <EmployeesProvider>
        <HashRouter>
          <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </HashRouter>
      </EmployeesProvider>
      </AuthProvider>
    </div>
  )
}

export default App
