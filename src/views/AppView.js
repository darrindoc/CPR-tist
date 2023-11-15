import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export const ApplicationViews = () => {
	const localCPRtistAdmin = localStorage.getItem("activeAdmin");
	const CPRtistAdminObject = JSON.parse(localCPRtistAdmin);

    if(CPRtistAdminObject) {
        return (
        <>
            <div className="Dashboard">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                </Routes>
            </div>
            </>

        );
    }
};