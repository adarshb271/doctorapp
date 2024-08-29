// import React from 'react';
// import Sidebar from '../../components/usersidebar';
// // import Appointment '../userappointment';
// import './userhome.css';

// const Userhome = () => {
//   <div className="container">
//     <h1>hi</h1>
//     <Sidebar />
//     {/* <Appointment />  */}
//   </div>;
// };

// export default Userhome;

// App.js
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
