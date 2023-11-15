import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ExpirationBox from "../components/NavBar/NavBar";
import EmployeeSearch from "../components/EmployeeSearch/EmployeeSearch";
import MyProfile from "../components/MyProfile/MyProfile";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <React.StrictMode>
      <NavBar />
      <div className="components">
        <ExpirationBox />
        <EmployeeSearch />
        <MyProfile />
      </div>
    </React.StrictMode>
  );
}
