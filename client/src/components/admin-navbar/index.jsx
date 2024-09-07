import React from 'react';
import './adminnavbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>Admin Panel</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        {/*         
        <li>
          <a href="#">Manage Appointments</a>
        </li> */}
        {/* <li>
          <a href="#settings">Settings</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
