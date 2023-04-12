import { Button } from "react-bootstrap";
import "./Login.scss";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='login-container'>
      <div className='header mx-auto'>Don't have an account yet?</div>
      <div className='title col-2 mx-auto'>Adventure Webdevstudios</div>
      <div className='welcome col-2 mx-auto'>Hello, who’s this?</div>
      <div className='content-form col-2 mx-auto'>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' className='form-control' value={emal} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' />
        </div>
        <span className='forgot-password'>Forgot Password ?</span>
        <div>
          <Button className='btn-submit'>Login to Webdevstudios</Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
