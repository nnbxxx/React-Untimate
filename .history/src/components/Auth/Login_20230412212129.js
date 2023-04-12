import { Button } from "react-bootstrap";
import "./Login.scss";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    alert("me");
  };
  return (
    <div className='login-container'>
      <div className='header mx-auto'>
        <span>Don't have an account yet?</span>
      </div>
      <div className='title col-2 mx-auto'>Adventure Webdevstudios</div>
      <div className='welcome col-2 mx-auto'>Hello, who’s this?</div>
      <div className='content-form col-2 mx-auto'>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <span className='forgot-password'>Forgot Password ?</span>
        <div>
          <Button
            className='btn-submit'
            onClick={(e) => {
              handleLogin();
            }}
          >
            Login to Webdevstudios
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
