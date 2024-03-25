import { useEffect, useState } from 'react';
import './EmployeeUpdate.css'



export const  EmployeeUpdateButton= ({employee}) => {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee)


const updateEmployee = (e) => {
  e.preventDefault()
    fetch(`http://localhost:8088/employees/${employee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    }).then((response) => response.json())
  };


const handleControlledInputChange = (e) => {
  const copyUpdatedEmployee = { ...updatedEmployee }
  copyUpdatedEmployee[`${e.target.id}`] = e.target.value 
  setUpdatedEmployee(copyUpdatedEmployee)
}

const pageReload = () => {
  window.location.reload();
}

    return (<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#employee-update-button-${employee.id}`}>
          Update Information
        </button>
        <div class="modal fade" id={`employee-update-button-${employee.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="employee-update-button">Employee Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => updateEmployee(e)}>
                  <input type="text" id="firstName" placeholder="First Name" onChange={handleControlledInputChange}  defaultValue={employee.firstName} /><br></br>
                  <input type="text" id="lastName" placeholder="Last Name" onChange={handleControlledInputChange}  defaultValue={employee.lastName} /> <br></br>
                  <input type="text" id="title" placeholder="Title" onChange={handleControlledInputChange} defaultValue={employee.title} /><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit"  class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
        </>
    );
}