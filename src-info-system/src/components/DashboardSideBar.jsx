import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSideBar = ({ name }) => {
  const buttonWidth = {
    width: "200px"
  };

  return (
    <>
      <aside className="col-md-3">
        {/* SIDEBAR */}
        <ul className="list-group">
          <Link className={`list-group-item ${name === "Dashboard" ? "active" : ""}`} to="/dashboard"> Dashboard</Link>
          <Link className={`list-group-item ${name === "Edit Profile" ? "active" : ""}`} to="/edit-profile">Edit Profile</Link>
          <Link className={`list-group-item ${name === "Terms & Conditions" ? "active" : ""}`} to="/terms&condition">Terms & Conditions</Link>
          <Link className={`list-group-item ${name === "Change Password" ? "active" : ""}`} to="/change-password">Change Password</Link>
        </ul>
        {/* Logout button */}
        <a className="btn btn-danger btn-block" style={buttonWidth} href="{% url 'logout' %}"> <i className="fa fa-power-off"></i> <span className="text">Log out</span> </a>
        {/* SIDEBAR .//END */}
      </aside>
    </>
  );
}

export default DashboardSideBar;
