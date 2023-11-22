import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ListEmployee() {
const [employees, setEmployees]= useState([])

useEffect(()=>{
    axios.get("http://localhost:6003/employees/api/v1/")
    .then((res)=>{
        setEmployees(res.data)
        console.log(res.data)
    }).catch (error=>{
        console.log(error)
    })
},[])

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
    <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Emp Id</th>
                <th>Emp Name</th>
                <th>Emp Last Name</th>
                <th>Emp Email</th>
                <th>Emp password</th>
                <th>Emp Phone No</th>
                <th>Emp Location</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        (employee, i)=>{
                            return(
                                <tr key={i}>
                                <td>{employee.empId}</td>
                                <td>{employee.empFirstName}</td>
                                <td>{employee.empLastName}</td>
                                <td>{employee.empEmail}</td>
                                <td>{employee.empPassword}</td>
                                <td>{employee.empPhoneNo}</td>
                                <td>{employee.empLocation}</td>
                            </tr>
                            )}
                        )}
            </tbody>
        </table>
    </div>
  )
}
export default ListEmployee
