import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className="backgroundimage">
      <div className="login">
        <h1> Login</h1>
        <div className="emailcontainer">
          <label>Email</label>
          <Input placeholder="please enter your email" />
        </div>
        <div className="passwordcontainer">
          <label> password</label>
          <Input type="password" />
        </div>
        <Button>Login</Button>
        <p>
          you don't have an account ? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
