import './EmployeeSearch.css'




export default function EmployeeSearch() {
    return (
<div class="m-4">
    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab">
                <li class="nav-item">
                    <a href="#search" class="nav-link active" data-bs-toggle="tab">Search</a>
                </li>
                <li class="nav-item">
                    <a href="#add" class="nav-link" data-bs-toggle="tab">Add</a>
                </li>
                <li class="nav-item">
                    <a href="#history" class="nav-link" data-bs-toggle="tab">History</a>
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
                        
                    </div>
                </div>
                <div class="tab-pane fade" id="add">
                    <h5 class="card-title-add">Add Employee</h5>
                    <input type="text" placeholder="First Name"></input><br></br>
                    <input type="text" placeholder="Last Name"></input><br></br>
                    <input type="text" placeholder="Title"></input><br></br>
                    <button>Add Employee</button>
                </div>
                <div class="tab-pane fade" id="history">
                    <h5 class="card-title">Employee History</h5>

                </div>
            </div>
        </div>
    </div>
</div>
    );
}