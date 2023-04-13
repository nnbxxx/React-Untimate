import { Button } from "react-bootstrap";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
    } else if (!password) {
      toast.error("Invalid Password");
    }
    //call api
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      dispatch(doLogin(data));
      setIsLoading(false);

      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };
  return (
    <div className='login-container'>
      <div className='header mx-auto'>
        <span className='text'>
          Don't have an account yet?
          <button
            className='btn-signup'
            onClick={() => {
              navigate("/SignUp");
            }}
          >
            {" "}
            Sign Up
          </button>
        </span>
      </div>
      <div className='title col-3 mx-auto'>Adventure Webdevstudios</div>
      <div className='welcome col-3 mx-auto'>Hello, who’s this?</div>
      <div className='content-form col-3 mx-auto'>
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
            disabled={isloading}
          >
            <ImSpinner10 className='loader-icon' />
            <span>Login to Webdevstudios</span>
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
