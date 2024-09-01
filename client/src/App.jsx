import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateRoutes';
import DoctorLogin from './pages/login';
import Signup from './pages/usersignup';
import Doctorhome from './pages/doctorhomepage';
import Doctorbooking from './pages/docbooking';
import Doctorslot from './pages/docslot';

import UserLogin from './pages/userlogin';
import Userhome from './pages/userhome';
import Userslot from './pages/userslotbookingpage';
// import UserSidebar from './pages/userhome';
// import DoctorSidebar from './pages/doctorsidebar';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        {/* <Route path="/user/home" element={<Userhome />} /> */}

        {/* <Route path="/user/mybooking" element={<Userslot />} /> */}

        {/* <Route path="/doctor/sidebar" element={<DoctorSidebar />} /> */}

        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute role="doctor" />}>
          <Route path="/doctor/home" element={<Doctorhome />} />
          <Route path="/doctor/booking" element={<Doctorbooking />} />
          <Route path="/doctor/slot" element={<Doctorslot />} />
        </Route>
        <Route element={<PrivateRoute role="user" />}>
          <Route path="/user/home" element={<Userhome />} />
          <Route path="/user/mybooking" element={<Userslot />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
