import './usersidebar.css';
// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="profile.png" alt="Profile" />
        <h2>Patient Name</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Booking</a>
          </li>
          <li>
            <a href="#">Add Slot</a>
          </li>
          <li className="logout">
            <a href="#">Logout</a>
          </li>{' '}
          {/* Add the class logout */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
