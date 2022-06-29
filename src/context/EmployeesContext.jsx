import { createContext, useState } from "react";

const EmployeesContext = createContext()

export function EmployeesProvider ({children}) {
  const limit = 10
  const [page, setPage] = useState(1)
  const [employees, setEmployees] = useState([])
  const [keyword, setKeyword] = useState('')

  return <EmployeesContext.Provider value={
    {
      page,
      setPage,
      employees,
      setEmployees,
      limit,
      keyword,
      setKeyword
    }
  }>
    {children}
  </EmployeesContext.Provider>
}

export default EmployeesContext