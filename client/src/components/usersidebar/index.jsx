import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './usersidebar.css';
import { Await } from 'react-router-dom';
// import React from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const getUserDetails = async () => {
    const userID = localStorage.getItem('id');
    const response = await axios.get(`/user/${userID}`);
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/userlogin');
  };
  return (
    <aside className="sidebar">
      <div className="profile">
        {/* <img src="profile.png" alt="Profile" /> */}
        <p>{`${user.firstname}  ${user.lastname}`}</p>
        {/* <p>{doctor.email}</p> */}
        {/* <h2>Patient Name</h2> */}
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"> MyBooking</a>
          </li>
          {/* <li>
            <a href="#">Add Slot</a>
          </li> */}
          <li onClick={logout} className="logout">
            <a href="#">Logout</a>
          </li>{' '}
          {/* Add the class logout */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
