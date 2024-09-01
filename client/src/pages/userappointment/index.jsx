import './userappointment.css';
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';

// // AppointmentForm.js
// import React, { useState } from 'react';

const AppointmentForm = () => {
  const [appointment, setappointment] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    firtname: '',
    mobileNumber: '',
    email: '',
    reason: '',
  });

  const [department, setDepartment] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const fetchDepartment = async () => {
    try {
      const response = await axios.get('/department');
      setDepartment(response.data);
    } catch (err) {
      console.log('Error fetching department:', err.message);
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDoctors = async departmentId => {
    try {
      const response = await axios.get(
        `/doctor/doctors/department/${departmentId}`
      );
      setDoctors(response.data);
    } catch (err) {
      console.error('Error fetching doctors:', err);
    }
  };

  const onChange = (e, key) => {
    setappointment({ ...appointment, [key]: e.target.value });

    if (key === 'department') {
      fetchDoctors(e.target.value);
    }
  };
  const OnChange = (e, key) => {
    setappointment({ ...appointment, [key]: e.target.value });
  };

  const onBtnClick = async () => {
    try {
      console.log('Attempting bookingSlot...');
      const response = await axios.post('/appointment', appointment);
      localStorage.setItem(ID, response.data.id);
      console.log(' successful:', response.data);
      navigate('/userlogin');
    } catch (e) {
      console.log('Signup failed:', e.response ? e.response.data : e.message);
      setError('Signup failed. Please check your details and try again.');
    }
    // e.preventDefault();
    // // Handle form submission
    // console.log(formData);
  };

  return (
    <div className="booking-slot">
      <div className="form-container">
        <h1 className="form-head">Book Your Appointment</h1>
        <p className="sub-head">Schedule Your Consultation with Ease</p>
        <form>
          <div className="form-group">
            {/* <ToastContainer /> */}
            <label>Select Department</label>
            <select
              id="department"
              required
              onChange={e => onChange(e, 'department')}
            >
              <option value="">Select Your Department</option>

              {department.map(department => (
                <option key={department._id} value={department._id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Doctor</label>
            <select id="doctor" required onChange={e => onChange(e, 'doctor')}>
              <option>Select Your Doctor</option>
              {doctors.map(doctor => (
                <option key={doctor._id}>
                  Dr. {doctor.firstname} {doctor.lastname}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Date</label>
            <input type="date" required onChange={e => onChange(e, 'date')} />
          </div>

          <div className="form-group time-group">
            <label>Select Time</label>
            <input
              type="time"
              id="time"
              name="time"
              min="08:00"
              max="20:00"
              required
              onChange={e => onChange(e, 'time')}
            />
            <p className="note">(Visiting hours are 8am to 8pm)</p>
          </div>

          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              onChange={e => onChange(e, 'fullname')}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number*</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              required
              onChange={e => onChange(e, 'mobilenumber')}
            />
          </div>

          <div className="form-group">
            <label>Email (optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email (optional)"
              onChange={e => onChange(e, 'email')}
            />
          </div>

          <div className="form-group">
            <label>Reason for Appointment</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Reason for Appointment"
              onChange={e => onChange(e, 'message')}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" onClick={onBtnClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
    // <div className="appointment-form-container">
    //   <h2>Book Your Appointment</h2>
    //   <p>Schedule Your Consultation with Ease</p>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="department">Select Department</label>
    //       <select
    //         id="department"
    //          value={formData.department}
    //         // onChange={OnChange}
    //         // required
    //       >
    //         <option value="" disabled>
    //           Select Your Department
    //         </option>
    //         <option value="cardiology">Cardiology</option>
    //         <option value="neurology">Neurology</option>
    //         <option value="orthopedics">Orthopedics</option>
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="doctor">Select Doctor</label>
    //       <select
    //         id="doctor"
    //         // value={formData.doctor}
    //         // onChange={OnChange}
    //          required
    //       >
    //         <option value="" disabled>
    //           Select Doctor
    //         </option>
    //         <option value="dr-smith">Dr. Smith</option>
    //         <option value="dr-jones">Dr. Jones</option>
    //         <option value="dr-brown">Dr. Brown</option>
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="date">Select Date</label>
    //       <input
    //         type="date"
    //         id="date"
    //         // value={formData.date}
    //         // onChange={OnChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="time">Select Time</label>
    //       <input
    //         type="time"
    //         id="time"
    //         // value={formData.time}
    //         // onChange={OnChange}
    //         required
    //       />
    //       <small>(Visiting hours are 8am to 8pm)</small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="fullName">Full Name*</label>
    //       <input
    //         type="text"
    //         id="fullName"
    //         placeholder="Full Name"
    //         value={formData.fullName}
    //         onChange={OnChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="mobileNumber">Mobile Number*</label>
    //       <input
    //         type="tel"
    //         id="mobileNumber"
    //         placeholder="Mobile Number"
    //         value={formData.mobileNumber}
    //         onChange={OnChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email (optional)</label>
    //       <input
    //         type="email"
    //         id="email"
    //         placeholder="Email (optional)"
    //         value={formData.email}
    //         onChange={OnChange}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="reason">Reason for Appointment</label>
    //       <textarea
    //         id="reason"
    //         placeholder="Reason for Appointment"
    //         value={formData.reason}
    //         onChange={OnChange}
    //       ></textarea>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
  );
};

export default AppointmentForm;
