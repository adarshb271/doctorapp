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
    // console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/user/login');
  };
  return (
    <div className="usersidebar">
      <div className="details">
        <div className="usercontent">
          <p>{`${user.firstname} ${user.lastname}`}</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="contents">
        <p>
          <NavLink className="link" to="/user/home">
            Home
          </NavLink>
        </p>
        <p>
          <NavLink className="link" to="/user/mybooking">
            My Bookings
          </NavLink>
        </p>
        {/* <p>Add slot</p> */}
        <p onClick={logout}>logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
