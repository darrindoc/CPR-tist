import { adminAPIData, employeeOrgAPIData, adminOrgAPIData, singleAdminOrgAPIData } from '../ComponentAPIManager';
import './MyProfile.css'
import { useState, useEffect } from 'react';
import UpdateMyInfo from './UpdateMyInfo';



export default function MyProfile() {
    const [employees, setEmployees ] = useState([])
    const [admins, setAdmins ] = useState([])
    const [adminOrgs, setAdminOrgs] =useState([])
    const [singleAdminOrg, setSingleAdminOrg] =useState([])

const localCPRtistAdmin = localStorage.getItem("activeAdmin");
const CPRtistAdminObject = JSON.parse(localCPRtistAdmin);

useEffect(() => {
    employeeOrgAPIData()
    .then((adminEmpArray) => {
        setEmployees(adminEmpArray)
    })
   },[])


    useEffect(() => {
        adminAPIData()
        .then((adminArray) => {
            setAdmins(adminArray)
        })
       },[])

       useEffect(() => {
        adminOrgAPIData()
        .then((adminOrgArray) => {
            setAdminOrgs(adminOrgArray)
        })
        },[])

        useEffect(() => {
            singleAdminOrgAPIData()
            .then((singleAdminOrgArray) => {
                setSingleAdminOrg(singleAdminOrgArray)
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
                        <UpdateMyInfo key={admin.id} admin={admin}/>                    
                        </> 
            )}
                        </div>
                    </div>
                </div>
    
                <div class="tab-pane fade" id="my-organizations">
                    
                    
                    
                    {adminOrgs.map((singleAdminOrg) => 
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
                {employees.map((employee) => {
               adminOrgs.map((admin) => {

                   return (employee.orgId === admin.orgId ) ?
                    <div className="employee-organization-card">
                            <p>Employee List is Working</p>
                        </div>
                        :
                        <p>Employee List is not Working</p>
                    })
})}
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}