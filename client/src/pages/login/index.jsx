import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './login.css';

const DoctorLogin = () => {
  // const { role } = useParams();

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onLogin = async () => {
    try {
      const response = await axios.post('/doctor/login', login);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      navigate('/doctor/home');
    } catch (e) {
      console.log('Email id or Password is incorrect');
      console.log(e);
    }
  };

  return (
    <div className="doctorbackgroundimage">
      <ToastContainer />

      <div className="login">
        <h1> Login</h1>
        <div className="emailcontainer">
          <label>Email</label>
          <Input
            onChange={e => onChange(e, 'email')}
            placeholder="please enter your email"
          />
        </div>
        <div className="passwordcontainer">
          <label> password</label>
          <Input type="password" onChange={e => onChange(e, 'password')} />
        </div>
        <Button onClick={onLogin}>Login</Button>
        <p>
          you don't have an account ? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};
export default DoctorLogin;
