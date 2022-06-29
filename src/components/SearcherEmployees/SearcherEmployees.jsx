import { useContext } from "react"
import EmployeesContext from "../../context/EmployeesContext"

export function SearcherEmployees () {
  const {keyword, setKeyword, employees, limit, page, setPage} = useContext(EmployeesContext)

  const handleNext = () => {
    if(keyword) return
    if(limit * page > employees.length) return
    setPage(prevPage => prevPage + 1)
  }

  const handlePrev = () => {
    if(keyword) return
    if(page === 1) return
    setPage(prevPage => prevPage - 1)
  }

  const handleChange = e => {
    setPage(1)
    setKeyword(e.target.value)
  }

  return (
    <form className="grid grid-cols-12 lg:flex gap-4 mb-6">
      <input type="text" value={keyword} onChange={handleChange} className="col-span-8 py-2 px-4 border shadow-md"/>
      <button className="col-span-2 py-2 lg:px-4 bg-purple-500 font-medium text-white rounded-md" onClick={handlePrev}>
        <img src="/icons/left.svg" alt="Previus" className="w-6 mx-auto" />
      </button>
      <button className="col-span-2 py-2 lg:px-4 bg-purple-500 font-medium text-white rounded-md" onClick={handleNext}>
        <img src="/icons/right.svg" alt="Next" className="w-6 mx-auto" />
      </button>
    </form>
  )
}