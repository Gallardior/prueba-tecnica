import { useEffect, useContext } from "react"
import EmployeesContext from "../../context/EmployeesContext"
import { getEmployees } from "../../services/getEmployees"

export function EmployeesTable () {
  const {employees, setEmployees, keyword, page, limit} = useContext(EmployeesContext)

  useEffect( () => {
    getEmployees().then(setEmployees)
  }, [])
  
  return(
    <table className="table-auto lg:table-fixed w-full">
      <thead>
        <tr>
          <th className="text-left px-2 py-3 lg:p-3 text-xs lg:text-base">ID</th>
          <th className="text-left px-2 py-3 lg:p-3 text-xs lg:text-base">Name</th>
          <th className="text-left px-2 py-3 lg:p-3 text-xs lg:text-base">Lastname</th>
          <th className="text-left px-2 py-3 lg:p-3 text-xs lg:text-base">Brithday</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.filter(employee => {
            const nameToCompare = `${employee.name} ${employee.last_name}`.trim().toLowerCase()
            const keywordToCompare = keyword.trim().toLowerCase()
            return nameToCompare.includes(keywordToCompare)
          })
          .map((employee, i) => {
            if(i+1 <= page * limit && i+1 > (page - 1) * limit) {
              return(
                <tr key={employee.id} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="px-2 py-3 lg:p-3 text-xs lg:text-base">{employee.id}</td>
                  <td className="px-2 py-3 lg:p-3 text-xs lg:text-base">{employee.name}</td>
                  <td className="px-2 py-3 lg:p-3 text-xs lg:text-base">{employee.last_name}</td>
                  <td className="px-2 py-3 lg:p-3 text-xs lg:text-base">{employee.birthday}</td>
                </tr>
              )
            }
          })
        }
      </tbody>
    </table>
  )
}