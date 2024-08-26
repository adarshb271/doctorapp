import React from 'react';
import { Link } from 'react-router-dom';
import './userhome.css';

const UserSidebar = () => {
  return (
    <div className="user-sidebar">
      <div className="sidebar-header">
        <h2>User Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/user/profile">Profile</Link>
        </li>
        <li>
          <Link to="/user/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/user/medical-history">Medical History</Link>
        </li>

        <li>
          <Link to="/user/settings">Settings</Link>
        </li>

        <li>
          <Link to="/user/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
