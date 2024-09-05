import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import './docsignup.css';

const DocSignup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [departments, setDepartments] = useState([]);

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
    image: null,
  });

  const onChange = (e, key) => {
    const value = key === 'image' ? e.target.files[0] : e.target.value;
    setSignup({ ...signup, [key]: value });
  };

  const onSignupBtn = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      console.log('Attempting Signup...');

      const formData = new FormData();
      Object.keys(signup).forEach(key => {
        formData.append(key, signup[key]);
      });

      const response = await axios.post('/doctor/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Signup successful:', response.data);
      toast.success('Signup Successful');
    } catch (e) {
      console.log('Signup failed:', e.response ? e.response.data : e.message);
      setError('Signup failed. Please check your details and try again.');
      // toast.error('Signup failed, please check your values');
      console.log('Signup failed, please check your values');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('/department');
      setDepartments(response.data);
    } catch (err) {
      console.log('Error fetching departments:', err.message);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="main">
      <div className="doc-signup">
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
              {/* <label>Department</label>
              <input
                type="text"
                placeholder="Department:"
                required
                onChange={e => onChange(e, 'department')}
              /> */}
              <label>Select Department</label>
              <select
                id="department"
                required
                onChange={e => onChange(e, 'department')}
              >
                <option value="">Select Your Department</option>

                {departments.map(department => (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                ))}
              </select>
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
                <option value="">Select Gender</option>{' '}
                {/* Add a default option */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" required onChange={e => onChange(e, 'DOB')} />
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
            <button
              className="signup-button"
              onClick={onSignupBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default DocSignup;
