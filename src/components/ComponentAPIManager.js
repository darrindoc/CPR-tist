import { useState, useEffect } from "react";


//collects all info from db/admins for selected user
export const adminAPIData = () => {
return fetch(`http://localhost:8088/admins?id=5`)
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

//collects all info for certs belonging to specified employee and sorts
export const certAPIDataMostRecent = () => {
    return fetch(`http://localhost:8088/certs?employeeId=3&_sort=expiration_asc&_limit=1`)
        .then(res => res.json())
    }

// collects admin/org relationship info
export const adminOrgAPIData = () => {
    return fetch(`http://localhost:8088/adminOrgs/?_expand=admin&_expand=org`)
        .then(res => res.json())
    }

//function to search and return admin/org relationships
/*export const filteredAdminOrgs = () => {
const localCPRtistAdmin = localStorage.getItem("activeAdmin");
const CPRtistAdminObject = JSON.parse(localCPRtistAdmin);

    if (adminOrg.adminId === CPRtistAdminObject.id) {
        return(
            <p>Organization: {org.name}</p>
        )
    } */

// collects employee/org relationship info
export const employeeOrgAPIData = () => {
    return fetch(`http://localhost:8088/employeeOrgs/?_expand=employee&_expand=org`)
        .then(res => res.json())
    }

// Connects employees to admins through organizations
export const adminEmployeeOrgAPIData = () => {
    return fetch(`http://localhost:8088/employeeOrgs/?_expand=employee&_expand=org`)
        .then(res => res.json())
    }

//add new employee
export const addNewEmployee = (newEmployee) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
    });
}