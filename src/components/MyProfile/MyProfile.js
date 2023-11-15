import { adminAPIData } from '../ComponentAPIManager';
import './MyProfile.css'
import { useState, useEffect } from 'react';



export default function MyProfile() {
    const [admins, setAdmins ] = useState([])


    useEffect(() => {
        adminAPIData()
        .then((adminArray) => {
            setAdmins(adminArray)
        })
       },[])

    return (<>
<div class="m-4">
    <div class="card text-center">
        <div class="card-header">
        <h1>My Profile</h1>
            <ul class="nav nav-tabs card-header-tabs" id="myTab">
                <li class="nav-item">
                    <a href="#my-info" class="nav-link active" data-bs-toggle="tab">Info</a>
                </li>
                <li class="nav-item">
                    <a href="#my-organizations" class="nav-link" data-bs-toggle="tab">Organizations</a>
                </li>
                <li class="nav-item">
                    <a href="#my-employees" class="nav-link" data-bs-toggle="tab">Employees</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="my-info">
                    <h5 class="card-title">Update Information</h5>
                    <div className='my-info-form'>
                        <div className="my-info-list">
                        {admins.map((admin) => 
                        <>First Name: {admin.firstName}<br></br> 
                        Last Name: {admin.lastName}<br></br> 
                        Title: {admin.title}<br></br>
                        email: {admin.email}                       
                        </> 
            )}
                            <div>First Name: <input type="text" placeholder="First Name"/></div>
                            <div>Last Name: <input type="text" placeholder="Last Name"/></div>
                            <div>Title: <input type="text" placeholder="Title"/></div>
                            <div>Email: <input type="text" placeholder="email"/></div>
                            <div>Password: <input type="text" placeholder="password"/></div>
                        </div>
                        <button type="button" class="btn btn-success">Update Info</button>
                    </div>
                </div>
                <div class="tab-pane fade" id="my-organizations">
                    <div className="my-organization-card">
                        <h5 class="card-title-add">St. Thomas Hospital - ER</h5>
                        <p>245 Legitimate Street Huntington, WV 25703 </p>
                        <button type="button" class="btn btn-danger">Delete Organization</button>
                    </div>
                    <div className="my-organization-card">
                        <h5 class="card-title-add">St. Thomas Hospital - PICU</h5>
                        <p>245 Legitimate Street Huntington, WV 25703 </p>
                        <button type="button" class="btn btn-danger">Delete Organization</button>
                    </div>
                    <button type="button" class="btn btn-primary">Add Organization</button>
                </div>
                <div class="tab-pane fade vh-20 overflow-auto" id="my-employees">
                    <div className="my-employee-card">
                        <p>Name: Sarah Smith</p>
                        <p>Title: LPN</p>
                        <p>Organization: St. Thomas Hospital - PICU</p>
                        <button type="button" class="btn btn-danger">Delete Employee</button>
                    </div>
                    <div className="my-employee-card">
                        <p>Name: Pedro Turner</p>
                        <p>Title: RN</p>
                        <p>Organization: St. Thomas Hospital - ER</p>
                        <button type="button" class="btn btn-danger">Delete Organization</button>
                    </div>
                    <div className="my-employee-card">
                        <p>Name: Frances Farmer</p>
                        <p>Title: RN</p>
                        <p>Organization: St. Thomas Hospital - PICU</p>
                        <button type="button" class="btn btn-danger">Delete Organization</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}