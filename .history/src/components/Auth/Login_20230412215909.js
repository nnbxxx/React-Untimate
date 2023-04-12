import { Button } from "react-bootstrap";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    //validate
    //call api
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className='login-container'>
      <div className='header mx-auto'>
        <span className='text'>
          Don't have an account yet?
          <button className='btn-signup'> Sign Up</button>
        </span>
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
        <div className='back text-center'>
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            &#60;&#60; Go to Home Page
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;