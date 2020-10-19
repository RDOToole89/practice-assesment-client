import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <ul className="Navbar-list">
        <li className="Navbar-list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="Navbar-list-item">
          <NavLink to="/schedule">Doctor Schedule</NavLink>
        </li>
        <li className="Navbar-list-item">
          <NavLink to="/signup">Patient Signup</NavLink>
        </li>
        <li className="Navbar-list-item">
          <NavLink to="/patientdatabase">Patient Database</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
