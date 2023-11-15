
//collects all info from db/admins for selected user
export const adminAPIData = () => {
return fetch(`http://localhost:8088/admins?id=4`)
    .then(res => res.json())
}

//gets orgsXadmin relationships for currently logged-in admin
export const adminOrgsAPI = () => {
    return fetch(`http://localhost:8088/adminOrgs`)
        .then(res => res.json())
    }



//collects all info from db/employees for selected user
export const employeeAPIData = () => {
    return fetch(`http://localhost:8088/employees?id=3`)
        .then(res => res.json())
    }

//collects all info for certs belonging to specified employee
export const certAPIData = () => {
    return fetch(`http://localhost:8088/certs?employeeId=3`)
        .then(res => res.json())
    }