import { useEffect, useState } from 'react';
import { CurrentlyExpiredCerts } from './CurrentlyExpired';
import './ExpirationBox.css'
import { allCerts, employeesAPIData } from '../ComponentAPIManager';



export default function ExpirationBox() {
    const [expirations, setExpirations] = useState ([])
    const [employees, setEmployees ] = useState([])


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

        function findExpiredCertifications(expirations) {
            const currentDate = new Date();
            return expirations.filter(expiredCert => {
                const expirationDate = new Date(expiredCert.expiration);
                return expirationDate < currentDate;
            });
        }
        
        function findUpcomingCertifications(expirations) {
            const currentDate = new Date();
            const thirtyDaysFromNow = new Date(currentDate);
            thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
        
            return expirations.filter(cert => {
                const expirationDate = new Date(cert.expiration);
                return expirationDate > currentDate && expirationDate <= thirtyDaysFromNow;
            });
        }
        
        const expiredCertifications = findExpiredCertifications(expirations);
        const upcomingCertifications = findUpcomingCertifications(expirations);
        
        console.log(expiredCertifications);
        console.log(upcomingCertifications);
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
        {upcomingCertifications.map((expiration, index) => {
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
</div>
    );
}