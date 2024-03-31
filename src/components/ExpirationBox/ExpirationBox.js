import { useEffect, useState } from 'react';
import { CurrentlyExpiredCerts } from './CurrentlyExpired';
import './ExpirationBox.css'
import { allCerts, employeesAPIData } from '../ComponentAPIManager';



export default function ExpirationBox() {
    const [expirations, setExpirations] = useState ([])
    const [employees, setEmployees ] = useState([])

    const currentDate = new Date().toLocaleDateString();

    const getAllEmployees = () => {
        employeesAPIData()
            .then((allEmployeeArray) => {
                setEmployees(allEmployeeArray)
            })
    }
    
    useEffect(() => {
            getAllEmployees()
            },[])

    useEffect(() => {
        allCerts()
        .then((certArray) => {
            setExpirations(certArray)
        })
        },[])

        const expiredCertifications = [];

        expirations.forEach(expiredCert => {
            const expirationDate = new Date(expiredCert.expiration);
            const currentDate = new Date();
            if (expirationDate < currentDate) {
                expiredCertifications.push(expiredCert);
            }
        });
        
        console.log(expiredCertifications)
    return (
<div className='expiration-cards'>
        <div  className="individual-exp-card" class="card text-bg-danger mt-5 mb-4">
        <div class="card-header">
            <h1>Expired Certifications</h1>
            <p>These employees are forbidden from treating patients until renewed!</p>
        </div>
        <ul className="list-group list-group-flush">
            {expiredCertifications.map((expiration, index) => {
                const employee = employees.find(emp => emp.id === expiration.employeeId);
                return (
                    <li key={index} className='list-group-item'>
                        {`${employee.lastName}, ${employee.firstName}: ${new Date(expiration.expiration).toLocaleDateString()}`}
                    </li>
                );
            })
            }
        </ul>
    </div>
    <div className="individual-exp-card" class="card text-bg-warning">
        <div class="card-header">
            <h1>Upcoming CPR Expirations</h1>
            <p>Schedule these employees for renewal ASAP!</p>
            
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">John King, RN: 11/30/2023</li>
            <li class="list-group-item">Sarah Smith, LPN: 11/30/2023</li>
            <li class="list-group-item">Pedro Samson, LPN: 11/30/2023</li>
        </ul>
    </div>
</div>
    );
}