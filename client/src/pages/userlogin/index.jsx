import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './userlogin.css';

const UserLogin = () => {
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
      const response = await axios.post('/user/login', login);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      navigate('/user/home');
    } catch (e) {
      console.log('Email id or Password is incorrect');
      console.log(e);
    }
  };

  return (
    <div className="userbackgroundimage">
      {/* <ToastContainer /> */}

      <div className="userlogin">
        <h1> user Login</h1>
        <div className="useremailcontainer">
          <label>Email</label>
          <Input
            onChange={e => onChange(e, 'email')}
            placeholder="please enter your email"
          />
        </div>
        <div className="userpasswordcontainer">
          <label> password</label>
          <Input type="password" onChange={e => onChange(e, 'password')} />
        </div>
        <Button className="userbutton" onClick={onLogin}>
          {' '}
          Login
        </Button>
        <div className="userparagraph">
          <p>
            you don't have an account ? <Link to="/signup">Sign up</Link>
          </p>
          <br />
          <p>
            <Link to="/user/forgotpassword"> forgotpassword ?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
