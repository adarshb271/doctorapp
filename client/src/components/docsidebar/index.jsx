import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './docsidebar.css';
import { Await } from 'react-router-dom';

const Docsidebar = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({});

  const getDoctorDetail = async () => {
    const doctorID = localStorage.getItem('id');
    const response = await axios.get(`/doctor/${doctorID}`);

    console.log(response.data);
    setDoctor(response.data);
  };

  useEffect(() => {
    getDoctorDetail();
    console.log('Doctor Details:', doctor);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('ID');
    navigate('/doctor/login');
  };

  return (
    <div className="doctor-sidebar">
      <br />
      <div className="img-div">
        {/* <img
          className="doctor-img"
          src={doctor.image || 'path/to/default/image.jpg'}
          alt="Doctor"
          onError={e => {
            e.target.src = 'path/to/default/image.jpg';
          }}
        /> */}

        <img className="doctor-img" src={doctor.image} alt="Doctor" />
      </div>
      <br />
      <h2 style={{ textAlign: 'center' }}></h2>
      <p className="doctor-name">{`${doctor.firstname} ${doctor.lastname}`}</p>
      <p className="doctor-email">{doctor.email}</p>
      <br />
      <p
        onClick={() => {
          navigate('/doctor/home');
        }}
      >
        Home
      </p>
      <p
        onClick={() => {
          navigate('/doctor/my-appointments');
        }}
      >
        My Appointments
      </p>
      <p
        onClick={() => {
          navigate(`/doctor/add-slots`);
        }}
      >
        Add Slots
      </p>
      <p
        onClick={() => {
          navigate('/doctor/edit-profile');
        }}
      >
        Edit Profile
      </p>
      <p onClick={logout}>Log Out</p>
      {/* <button onClick={onBtnDownloadPdf}>Download PDF</button> */}
    </div>
  );
};
export default Docsidebar;
