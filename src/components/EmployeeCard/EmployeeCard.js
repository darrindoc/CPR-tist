import './EmployeeCard.css'




export default function EmployeeCard() {
    return (
        <div className='employee-card'>
        <h1>Jane Doe, <p>RN</p></h1>
        <p>Expiration: 11/31/2023</p>
        <p>Certified through: Red Cross</p>
        <button>Update Information</button>
        </div>
    );
}