import { useState } from "react";
import { fetchAllEmployees, employeeAPIData, certAPIDataMostRecent } from "../ComponentAPIManager";
import { useEffect } from "react";
import {EmployeeUpdateButton} from "../EmployeeUpdate/EmployeeUpdate";
import { EmployeeDeleteButton } from "../DeleteEmployee/DeleteEmployeeButton";
import { EmployeeCard } from "./EmployeeCard";





export function EmployeeSearchResults( {searchTermsState}) {
const [allEmployees, setAllEmployees ] = useState([])
const [filteredEmployees , setFilteredEmployees] =useState([])
const [selectedEmployee, setSelectedEmployee] = useState({})
const [recentCerts, setRecentCerts] =useState([])

const getAllEmployees = () => {
    fetchAllEmployees()
        .then((allEmployeeArray) => {
            setAllEmployees(allEmployeeArray)
        })
}

useEffect(() => {
        getAllEmployees()
        },[])

        useEffect(
            () => {
                const searchedEmployees = (searchTermsState === "")? allEmployees  :  allEmployees.filter(emp => emp.firstName.toLowerCase().includes(searchTermsState.toLowerCase()) ) 
                setFilteredEmployees(searchedEmployees)
            },
            [searchTermsState, allEmployees]
        )    

        const handleSelect= (employeeId) => {
            employeeAPIData(employeeId)
            .then((singleEmployee) => { 
                setSelectedEmployee(singleEmployee[0])})

        }

useEffect(() => {
    certAPIDataMostRecent()
    .then((recentCertArray) => {
        setRecentCerts(recentCertArray)
    })
    },[])

    return (
        <div className="search-bar-container">
            <div data-bs-spy="scroll" className="employee-search-response-group">
                {filteredEmployees.map((employee) =>
                   < EmployeeCard key={employee.id} employee={employee} handleSelect={handleSelect}/>
                )}
            </div>
        </div>
    )
}