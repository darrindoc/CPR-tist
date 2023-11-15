import { Link, useNavigate } from "react-router-dom";
import './NavBar.css'
import { getAdminEmail, getAdminInfo } from "../../auth/AuthAPIManager";
import { adminAPIData } from "../ComponentAPIManager";
import { useState, useEffect } from "react";





export default function NavBar() {
    const [admins, setAdmins ] = useState([])
    const navigate = useNavigate();
    const localCPRtistAdmin = localStorage.getItem("activeAdmin");
	const CPRtistAdminObject = JSON.parse(localCPRtistAdmin);

   useEffect(() => {
    adminAPIData()
    .then((adminArray) => {
        setAdmins(adminArray)
    })
   },[])

    return (
        <div className="navbar">
            <div className='logout-button'>
            <Link
                className='navbar__link'
                to=''
                onClick={() => {
                    localStorage.removeItem("activeAdmin");
                    navigate("/", { replace: true });
                }}
            >
                <button type="button" class="btn btn-dark">Logout</button>
            </Link>
            </div>
            <div className="logged-in-as">
                
            {admins.map((admin) => 
                <p>Logged in as: <br></br>{admin.firstName} {admin.lastName}</p>
            )}
            </div>
                
            <div>
                <label for="org-select">Organization: </label>
                <br/>
                <select name="org-select" id="org-select">
                    <option value="1">St. Thomas Hospital - ER</option>
                    <option value="2">St. Thomas Hospital - PICU</option>

                </select>

            </div>
        </div>
    );
}