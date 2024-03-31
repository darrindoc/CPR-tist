import { Link, useNavigate } from "react-router-dom";
import './NavBar.css'
import { getAdminEmail, getAdminInfo } from "../../auth/AuthAPIManager";
import { adminAPIData } from "../ComponentAPIManager";
import { useState, useEffect } from "react";

const currentDate = new Date().toLocaleDateString();



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

    return (<>
    <nav class="navbar bg-danger text-white">
  <div class="container-fluid">
    <div className="logged-in-as">
            {admins.map((admin) => 
                <p>Logged in as: <br></br>{admin.firstName} {admin.lastName}, {admin.title}</p>
            )}
            </div>
            <h2>Current date: {currentDate}</h2>
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
  </div>
</nav>
        </>
    );
}