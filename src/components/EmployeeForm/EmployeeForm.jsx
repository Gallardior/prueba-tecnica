import { useState, useContext } from "react"
import EmployeesContext from "../../context/EmployeesContext"
import { sendEmployee } from "../../services/sendEmployee"
import { getEmployees } from "../../services/getEmployees"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function EmployeeForm () {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [brithday, setBrithday] = useState(null)

  const {setEmployees} = useContext(EmployeesContext)

  const handleName = e => {
    setName(e.target.value)
  }
  const handleLastName = e => {
    setLastName(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if(!name && !lastName && !brithday) {
      alert("Por favor completa el formulario")
      return  
    }

    const data = {
      name: name,
      last_name: lastName,
      birthday: brithday
    }

    sendEmployee(data)
      .then(res => {
        if(res.success) {
          // Hacer de nuevo petición al endpoint de empleados
          // Y actualizr el estado guardado en el context
          alert("Registro exitoso")
          getEmployees().then(setEmployees)

          // Resetear form
          setName('')
          setLastName('')
          setBrithday(null)
        }
      })
  }

  return(
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 lg:hidden">Add new employee</h2>
      <label htmlFor="name" className="font-medium" >Name</label>
      <input 
        className="px-4 py-2 border shadow-sm" 
        id="name" 
        maxLength={30}
        name="name"
        onChange={handleName} 
        required
        value={name}
      />
      <label htmlFor="lastName" className="font-medium" >Last Name</label>
      <input 
        className="px-4 py-2 border shadow-sm" 
        id="lastName" 
        maxLength={30}
        name="lastName" 
        onChange={handleLastName}
        required
        value={lastName}
      />
      <label htmlFor="brithday" className="font-medium" >Brithday</label>
      <DatePicker
        className="w-full py-2 px-4 border shadow-sm" 
        dateFormat="yyyy/MM/dd" 
        onChange={(date) => setBrithday(Date.parse(date))}
        required
        selected={brithday} 
      />
      <button type="submit" className="px-4 py-2 bg-purple-500 text-white font-semibold">Register</button>
    </form>
  )
}