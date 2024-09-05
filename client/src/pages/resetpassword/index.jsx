import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
// import { ToastContainer, toast } from 'react-toastify';
import './reset.css';

const DocResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      //   toast.error("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(`/doctor/reset/${token}`, {
        password,
        confirmpassword: confirmPassword,
      });

      if (response.data.message === 'password reset suceesfully') {
        // toast.success('Password reset successfully!');
        navigate('/doctor/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      //   toast.error('Invalid token or error resetting password');
      console.log('error');
    }
  };

  return (
    <div className="resetPassword">
      {/* <ToastContainer /> */}
      <h2>Reset Password</h2>
      <div className="inputGroup">
        <label htmlFor="password">New Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter new password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <button className="btn" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default DocResetPassword;
