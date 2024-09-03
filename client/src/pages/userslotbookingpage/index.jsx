import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Sidebar from '../../components/usersidebar';
import './userslot.css';

const Userslot = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = localStorage.getItem('id');

  const getAppointmentDetails = async () => {
    try {
      if (!userId) {
        console.error('User ID is not available');
        return;
      }

      const response = await axios.get(`/appointment/api/${userId}`);
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error.message);
    }
    // try {
    //   const response = await axios.get('/appointment');
    //   setAppointments(response.data);
    //   console.log({ message: response.data });
    // } catch (error) {
    //   console.log({ getAppointment: error.message });
    // }
  };

  useEffect(() => {
    getAppointmentDetails();
  }, [userId]);

  return (
    <div className="mybooking">
      <div className="user-slotpage">
        <Sidebar />
        <div className="table-contents">
          {appointments.map(appointment => (
            <div key={appointment._id} className="booking-card">
              <div className="booking-header">
                {/* <h3>{appointment.doctor?.name || 'No Doctor'}</h3> */}
                <h3>
                  {' '}
                  {appointment.doctor.firstname} {appointment.doctor.lastname}
                </h3>
                <span className="status confirmed">Confirmed</span>
              </div>
              <div className="booking-details">
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(appointment.date).toLocaleDateString() || 'No Date'}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time || 'No Time'}
                </p>
                <p>
                  <strong>Specialization:</strong>{' '}
                  {appointment.department?.name || 'N/A'}
                </p>
              </div>
              <div className="booking-footer">
                <button className="reschedule-btn">Reschedule</button>
                <button className="cancel-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userslot;
