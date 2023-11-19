import { adminAPIData, adminOrgAPIData } from '../ComponentAPIManager';
import './MyProfile.css'
import { useState, useEffect } from 'react';
import UpdateMyInfo from './UpdateMyInfo';



export default function MyProfile() {
    const [admins, setAdmins ] = useState([])
    const [adminOrg, setAdminOrg] =useState([])

const localCPRtistAdmin = localStorage.getItem("activeAdmin");
const CPRtistAdminObject = JSON.parse(localCPRtistAdmin);

    useEffect(() => {
        adminAPIData()
        .then((adminArray) => {
            setAdmins(adminArray)
        })
       },[])

       useEffect(() => {
        adminOrgAPIData()
        .then((adminOrgArray) => {
            setAdminOrg(adminOrgArray)
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

                        </div>
                        <UpdateMyInfo />
                    </div>
                </div>
    
                <div class="tab-pane fade" id="my-organizations">
                    
                    
                    
                    {adminOrg.map((singleAdminOrg) => 
                    (singleAdminOrg.adminId === CPRtistAdminObject.id) ?
                    <div className="my-organization-card">
                        <h4>{singleAdminOrg.org.name}<br></br></h4> 
                        <p>Address: {singleAdminOrg.org.street} {singleAdminOrg.org.city}, {singleAdminOrg.org.state} {singleAdminOrg.org.zip} </p>
                        <button>Delete Organization</button>
                        </div>
                        :
                        <></>
                        )}
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
                        <button type="button" class="btn btn-danger">Delete Employee</button>
                    </div>
                    <div className="my-employee-card">
                        <p>Name: Frances Farmer</p>
                        <p>Title: RN</p>
                        <p>Organization: St. Thomas Hospital - PICU</p>
                        <button type="button" class="btn btn-danger">Delete Employee</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}