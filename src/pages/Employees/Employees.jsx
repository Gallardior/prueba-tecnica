import { useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext"
import { Navigate } from "react-router-dom"
import { EmployeesTable } from "../../components/EmployeesTable/EmployeesTable"
import { SearcherEmployees } from "../../components/SearcherEmployees/SearcherEmployees"
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm"

export function Employees () {
  const {isLogin} = useContext(AuthContext)
  if(!isLogin) return <Navigate to="/" replace={true}/> 

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">Employees</h2>
      <SearcherEmployees />
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <article className="lg:col-span-8">
          <EmployeesTable />
        </article>
        <article className="lg:col-span-4">
          <EmployeeForm />
        </article>
      </div>
    </section>
  )
}