import './AddEmployee.css'
import { useState } from 'react';
import { addNewEmployee } from '../ComponentAPIManager';



export default function AddEmployeeButton() {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    title: "",
    employeeNumber: ""
})

const handleControlledInputChange = (e) => {

  const copyNewEmployee = { ...newEmployee }

  copyNewEmployee[`${e.target.id}`] = e.target.value 

  setNewEmployee(copyNewEmployee)

}

const pageReload = () => {
  window.location.reload();
}

const addNewEmployee = (e, newEmployee) => {
  e.preventDefault()
  return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
  });
}



    return (<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-employee-button">
          Add Employee
        </button>
        <div class="modal fade" id="add-employee-button" tabindex="-1" aria-labelledby="add-employee-button" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="add-employee-button">Employee Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => addNewEmployee(e, newEmployee)}>
                  <input type="text" id="firstName" placeholder="First Name" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="lastName" placeholder="Last Name" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="title" placeholder="Title" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="employeeNumber" placeholder="Employee ID#" onChange={handleControlledInputChange}></input><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={pageReload} class="btn btn-primary">Save changes</button>
              </form>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
        </>
    );
}