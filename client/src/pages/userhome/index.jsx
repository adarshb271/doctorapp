import React from 'react';
import Sidebar from '../../components/usersidebar';
import AppointmentForm from '../userappointment';
import './userhome.css';

function Userhome() {
  return (
    <div className="container">
      <Sidebar />
      <AppointmentForm />
    </div>
  );
}

export default Userhome;
