import { useEffect, useState } from "react"
import { EmployeeDeleteButton } from "../DeleteEmployee/DeleteEmployeeButton"
import { EmployeeUpdateButton } from "../EmployeeUpdate/EmployeeUpdate"
import { certAPIDataMostRecent } from "../ComponentAPIManager"
import CPRUpdateButton from "../CPRUpdate/CPRUpdate"



export const EmployeeCard = ({employee, handleSelect}) => {

    const [recentCerts, setRecentCerts] =useState([])

    var expirationDate = new Date(1701388700000);
    var expDateFormatted = (expirationDate.getUTCMonth() + 1) + '-' + expirationDate.getUTCDate() + '-' + expirationDate.getUTCFullYear();

    useEffect(() => {
        certAPIDataMostRecent()
        .then((recentCertArray) => {
            setRecentCerts(recentCertArray)
        })
        },[])


    return (
        <div class="card text-center mb-3" className="employee-search-response">
    <div class="card-body" >
        <h5 class="card-title">{employee.firstName} {employee.lastName}, {employee.title}</h5>
        <p>ID: {employee.employeeNumber}</p>
        <div className="most-recent-on-card">
        {recentCerts.map((cert) => <>
                            <p>Certified through: {cert.agency} </p>
                            <p>Certification Number: {cert.certNumber} </p>
                            <p>Expiration: {expDateFormatted} </p>
                        </>
                         )}
                         <CPRUpdateButton/>
                         </div>
        <div className="employee-buttons-container">
            { <button type="button" class="btn btn-primary mx-2"  >Select</button>}
            <EmployeeDeleteButton id={employee.id} />
            <EmployeeUpdateButton employee={employee} />
        </div>
    </div>
    </div>
    )
}