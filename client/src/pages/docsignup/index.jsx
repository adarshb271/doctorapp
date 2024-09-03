import { useNavigate, Link } from 'react-router-dom';
import axios from '../../utils/axios';
//import axios from 'axios';
import { useState } from 'react';

import './docsignup.css';

const DocSignup = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [signup, setSignup] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    mobilenumber: '',
    gender: '',
    address: '',
    DOB: '',
    specialization: '',
    department: '',
    image: '',
  });

  const onChange = (e, key) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  const onSignupBtn = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      console.log('Attempting Signup...');
      const response = await axios.post('/doctor/sign-up', signup);
      console.log('Signup successful:', response.data);
      toast.success('Signup Sucessful');
      navigate('/doctor/login');
    } catch (e) {
      console.log('Signup failed:', e.response ? e.response.data : e.message);
      setError('Signup failed. Please check your details and try again.');
      toast.error('Signup failed, Please check ur value');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main">
      <div className="doc-ignup">
        <div className="signup-container">
          <h2>DOCTOR Sign Up</h2>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First name:"
                required
                onChange={e => onChange(e, 'firstname')}
              />
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last name:"
                required
                onChange={e => onChange(e, 'lastname')}
              />
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Email:"
                required
                onChange={e => onChange(e, 'email')}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password:"
                required
                onChange={e => onChange(e, 'password')}
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Mobile number:"
                required
                onChange={e => onChange(e, 'mobilenumber')}
              />
              <label>Department</label>
              <input
                type="text"
                placeholder="Department:"
                required
                onChange={e => onChange(e, 'department')}
              />
            </div>
            <div className="form-group">
              <label>Specialization</label>
              <input
                type="text"
                placeholder="Specialization:"
                required
                onChange={e => onChange(e, 'specialization')}
              />
              <label>Gender</label>
              <select
                id="gender"
                required
                onChange={e => onChange(e, 'gender')}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" required onChange={e => onChange(e, 'date')} />
              <label htmlFor="address">Address</label>
              <textarea
                placeholder="Address:"
                required
                onChange={e => onChange(e, 'address')}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">Profile Image</label>
              <input
                type="file"
                required
                onChange={e => onChange(e, 'image')}
              />
            </div>
            <button className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocSignup;
