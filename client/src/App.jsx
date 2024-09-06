import { Routes, Route } from 'react-router-dom';
import AllHome from './pages/allhome';
import PrivateRoute from './components/privateRoutes';
import DoctorLogin from './pages/login';
import DoctorSignup from './pages/docsignup';
import Signup from './pages/usersignup';
import Doctorhome from './pages/doctorhomepage';
import Doctorbooking from './pages/docbooking';
import Doctorslot from './pages/doctorSlot';
import DocForgotPassword from './pages/forgotpassword';
import DocResetPassword from './pages/resetpassword';
import UserForgotPassword from './pages/userForgotpassword';
import UserResetPassword from './pages/userresetpassword.css';
import UserLogin from './pages/userlogin';
import Userhome from './pages/userhome';
import Userslot from './pages/userslotbookingpage';
import Adminhome from './pages/admin';
import AdminLogin from './pages/adminlogin';
// import UserSidebar from './pages/userhome';
// import DoctorSidebar from './pages/doctorsidebar';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/home" element={<Adminhome />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/allhome" element={<AllHome />} />

        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/doctor/forgotpassword" element={<DocForgotPassword />} />
        <Route path="/doctor/reset/:token" element={<DocResetPassword />} />

        <Route path="/user/forgotpassword" element={<UserForgotPassword />} />
        <Route path="/user/reset/:token" element={<UserResetPassword />} />

        {/* <Route path="/doctor/sidebar" element={<DoctorSidebar />} /> */}
        <Route path="/doctor/signup" element={<DoctorSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute role="doctor" />}>
          <Route path="/doctor/home" element={<Doctorhome />} />
          <Route path="/doctor/booking" element={<Doctorbooking />} />
          <Route path="/doctor/slot" element={<Doctorslot />} />
        </Route>
        {/* <Route element={<PrivateRoute role="user" />}> */}
        <Route path="/user/home" element={<Userhome />} />
        <Route path="/user/mybooking" element={<Userslot />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
