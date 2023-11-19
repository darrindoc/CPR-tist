import { useState } from "react"


export default function UpdateMyInfo() {

    const [adminInfo, setAdminInfo] = useState({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        password: ""
    })
    
    const handleControlledInputChange = (e) => {
    
      const newAdminInfo = { ...adminInfo }
    
      newAdminInfo[`${e.target.id}`] = e.target.value 
    
      setAdminInfo(newAdminInfo)
    
    }
    
    
    const updateAdminInfo = (e, id) => {
      e.preventDefault()
      return fetch(`http://localhost:8088/admins?id=${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(adminInfo),
      });
    }


return (<>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#employee-update-modal">
          Update Information
        </button>
        <div class="modal fade" id="employee-update-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Admin Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => updateAdminInfo(e, adminInfo)}>
                  <input type="text" id="firstName" placeholder="First Name" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="lastName" placeholder="Last Name" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="title" placeholder="Title" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="email" placeholder="Email" onChange={handleControlledInputChange}></input><br></br>
                  <input type="text" id="password" placeholder="Password" onChange={handleControlledInputChange}></input><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
        </>)
}