import './userforgetpassword.css';

import { useState } from 'react';
import axios from '../../utils/axios'; // Importing axios instance
// import { ToastContainer, toast } from 'react-toastify';

const UserForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('/user/forgotpassword', { email });
      if (response.data.message === 'Mail Send') {
        // toast.success('Password reset email sent successfully!');
        console.log('sucess');
      } else {
        // toast.error(response.data.message);
        console.log('error');
      }
    } catch (error) {
      // toast.error('Error sending password reset email');
      console.log('Error sending password reset email');
    }
  };

  return (
    <div className="forgot-Password">
      {/* <ToastContainer /> */}
      <h2>Forgot Password</h2>
      <div className="inputGroup">
        <label htmlFor="email">Enter your Email ID:</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button className="btn" onClick={handleForgotPassword}>
        Send Reset Link
      </button>
    </div>
  );
};

export default UserForgotPassword;
