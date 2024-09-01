import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Sidebar from '../../components/usersidebar';
import './userslot.css';

const Userslot = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointmentDetails = async () => {
    try {
      const response = await axios.get('/appointment');
      setAppointments(response.data);
      console.log({ message: response.data });
    } catch (error) {
      console.log({ getAppointment: error.message });
    }
  };

  useEffect(() => {
    getAppointmentDetails();
  }, []);

  return (
    <div className="mybooking">
      <div className="user-slotpage">
        <Sidebar />
        <div className="table-contents">
          {appointments.map(appointment => (
            <div key={appointment._id} className="booking-card">
              <div className="booking-header">
                <h3>{appointment.doctor}</h3>
                <span className="status confirmed">Confirmed</span>
              </div>
              <div className="booking-details">
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(appointment.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p>
                  <strong>Specialization:</strong> {appointment.department}
                </p>
              </div>
              <div className="booking-footer">
                <button className="reschedule-btn">Reschedule</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userslot;
