import CPRUpdateButton from '../CPRUpdate/CPRUpdate';
import EmployeeUpdateButton from '../EmployeeUpdate/EmployeeUpdate';
import AddEmployeeButton from '../AddEmployee/AddEmployee';

import { useState, useEffect } from "react";


import './EmployeeSearch.css'
import { adminOrgAPIData, certAPIData, certAPIDataMostRecent, employeeAPIData } from '../ComponentAPIManager';




export default function EmployeeSearch() {

var expirationDate = new Date(1701388700000);
var expDateFormatted = (expirationDate.getUTCMonth() + 1) + '-' + expirationDate.getUTCDate() + '-' + expirationDate.getUTCFullYear();



const [employees, setEmployees ] = useState([])
const [certs, setCerts] =useState([])
const [recentCerts, setRecentCerts] =useState([])



useEffect(() => {
    employeeAPIData()
    .then((employeeArray) => {
        setEmployees(employeeArray)
    })
    },[])

useEffect(() => {
    certAPIData()
    .then((certArray) => {
        setCerts(certArray)
    })
    },[])

useEffect(() => {
    certAPIDataMostRecent()
    .then((recentCertArray) => {
        setRecentCerts(recentCertArray)
    })
    },[])




return (<>
<div class="m-4">
    <div class="card text-center">
        <div class="card-header">
        <h1>Manage Employees</h1>
            <ul class="nav nav-tabs card-header-tabs" id="myTab">
                <li class="nav-item">
                    <a href="#search" class="nav-link active" data-bs-toggle="tab">Search</a>
                </li>
                <li class="nav-item">
                    <a href="#info" class="nav-link" data-bs-toggle="tab">Most Recent</a>
                </li>
                <li class="nav-item">
                    <a href="#history" class="nav-link" data-bs-toggle="tab">History</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                    {employees.map((employee) => 
                         <p>{employee.firstName} {employee.lastName}, {employee.title}</p>
                    )}
                </a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="search">
                    <h5 class="card-title">Employee Search</h5>
                    <div className='emp-search-form'>
                        <input type="text"></input>
                        <button>Search</button>
                        <br></br>
                        <br></br>
                        <h5>No matches found?</h5>
                        <AddEmployeeButton/>
                    </div>
                </div>
                <div class="tab-pane fade" id="info">
                        <div className='employee-demographics'>
                        {employees.map((employee) => <>
                            <h5>{employee.firstName} {employee.lastName}, {employee.title}</h5>
                            <p>Employee ID: {employee.employeeId}</p>
                            </>
                        )}
                        {recentCerts.map((cert) => <>
                            <p>Certified through: {cert.agency} </p>
                            <p>Certification Number: {cert.certNumber} </p>
                            <p>Expiration: {expDateFormatted} </p>
                        </>
                         )}

                        </div>
                    <EmployeeUpdateButton/>
                    <CPRUpdateButton/>
                    <button type="button" class="btn btn-danger">Delete Employee</button>
                </div>
                <div class="tab-pane fade vh-20 overflow-auto" id="history">
                    <h5 class="card-title">Certification History</h5>
                    {certs.map((cert) => 
                            <div className='specific-cert-card'>
                            <p>Agency: {cert.agency} </p>
                            <p>Certification Number: {cert.certNumber} </p>
                            <p>Expiration: {expDateFormatted} </p>
                            </div>
                         )}
                    
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}