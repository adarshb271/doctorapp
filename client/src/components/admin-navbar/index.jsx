// Navbar.jsx
import React from 'react';
import './adminnavbar.css'; // Add your styles here

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>Admin Panel</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#users">Home</a>
        </li>
        {/*         
        <li>
          <a href="#appointments">Manage Appointments</a>
        </li> */}
        {/* <li>
          <a href="#settings">Settings</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
