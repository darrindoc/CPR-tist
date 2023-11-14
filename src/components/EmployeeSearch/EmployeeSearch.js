import CPRUpdateButton from '../CPRUpdate/CPRUpdate';
import EmployeeUpdateButton from '../EmployeeUpdate/EmployeeUpdate';
import AddEmployeeButton from '../AddEmployee/AddEmployee';
import './EmployeeSearch.css'




export default function EmployeeSearch() {
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
                    <a href="#info" class="nav-link" data-bs-toggle="tab">Info</a>
                </li>
                <li class="nav-item">
                    <a href="#history" class="nav-link" data-bs-toggle="tab">History</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Jane Doe, RN</a>
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
                    <h5 class="card-title-add">Jane Doe, RN</h5>
                    <p>Employee ID: JD1445</p>
                    <p>Certified through: Red Cross</p>
                    <p>Certification Number: RC8874158</p>
                    <p>Expiration: 11/30/2023</p>
                    <EmployeeUpdateButton/>
                    <CPRUpdateButton/>
                    <button type="button" class="btn btn-danger">Delete Employee</button>
                </div>
                <div class="tab-pane fade vh-20 overflow-auto" id="history">
                    <h5 class="card-title">Certification History</h5>
                    <div className="cert-history">
                        <p>Agency: Red Cross</p>
                        <p>Dates: 11/30/2021 - 11/30/2022</p>
                    </div>
                    <div className="cert-history">
                        <p>Agency: American Heart Association</p>
                        <p>Dates: 11/30/2020 - 11/30/2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}