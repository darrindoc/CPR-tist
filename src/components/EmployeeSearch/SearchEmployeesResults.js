import { useState } from "react";
import { employeesAPIData } from "../ComponentAPIManager";
import { useEffect } from "react";





export function EmployeeSearchResults( {searchTermsState}) {
const [allEmployees, setAllEmployees ] = useState([])
useEffect(() => {
        employeesAPIData()
        .then((allEmployeeArray) => {
            setAllEmployees(allEmployeeArray)
        })
        },[])

        useEffect(
            () => {
                const searchedEmployees = allEmployees.filter(emp => emp.firstName.startsWith(searchTermsState))
                setAllEmployees(searchedEmployees)
            },
            [ searchTermsState ]
        )    

    return (
        <div className="search-bar-container">
            <div data-bs-spy="scroll" className="employee-search-response-group">
                {allEmployees.map((employees) =>
                    <div class="card text-center mb-3" >
                    <div class="card-body">
                        <h5 class="card-title">{employees.firstName} {employees.lastName}, {employees.title}</h5>
                        <p>ID: {employees.employeeId}</p>
                        <button>Select</button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}