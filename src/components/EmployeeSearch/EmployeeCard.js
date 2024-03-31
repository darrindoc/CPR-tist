import { useEffect, useState } from "react"
import { EmployeeDeleteButton } from "../DeleteEmployee/DeleteEmployeeButton"
import { EmployeeUpdateButton } from "../EmployeeUpdate/EmployeeUpdate"
import { certAPIDataMostRecent } from "../ComponentAPIManager"
import CPRUpdateButton from "../CPRUpdate/CPRUpdate"



export const EmployeeCard = ({employee, handleSelect}) => {

    const [employeeData, setEmployeeData] = useState(employee)
    const [recentCerts, setRecentCerts] =useState([])

    useEffect(() => {
        certAPIDataMostRecent(employee.id)
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
        {recentCerts.length > 0 ? (
            recentCerts.map((cert) => (
                    <>
                        <p>Certified through: {cert.agency} </p>
                        <p>Certification Number: {cert.certNumber} </p>
                        <p>Expiration: {new Date(cert.expiration).toLocaleDateString()} </p>
                    </>
                ))) : (<>
                    <h2>No Certification</h2>
                    <h2>On File!</h2>
                    <p>Add certification or schedule training ASAP!</p>
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