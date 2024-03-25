import { useState } from "react"


export default function UpdateMyInfo(admin) {

    const [adminInfo, setAdminInfo] = useState(admin)
    
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
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#employee-update-button-${admin.id}`}>
          Update Information
        </button>
        <div class="modal fade" id={`#employee-update-button-${admin.id}`} tabindex="-1" aria-labelledby={`#employee-update-button-${admin.id}`} aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Admin Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form class="modal-body" onSubmit={(e) => updateAdminInfo(e, adminInfo)}>
                  <input type="text" id="firstName" placeholder="First Name" onChange={handleControlledInputChange} defaultValue={admin.firstName}></input><br></br>
                  <input type="text" id="lastName" placeholder="Last Name" onChange={handleControlledInputChange} defaultValue={admin.lastName}></input><br></br>
                  <input type="text" id="title" placeholder="Title" onChange={handleControlledInputChange} defaultValue={admin.title}></input><br></br>
                  <input type="text" id="email" placeholder="Email" onChange={handleControlledInputChange} defaultValue={admin.email}></input><br></br>
                  <input type="text" id="password" placeholder="Password" onChange={handleControlledInputChange} defaultValue={admin.admin.password}></input><br></br>
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