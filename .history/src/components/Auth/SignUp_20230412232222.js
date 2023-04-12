import "./SignUp.scss";
import { SiWebflow } from "react-icons/si";
import { Button } from "react-bootstrap";
import { BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='signup-container'>
      <div className='left-signup-layout '>
        <span className='title col-3'>Sign up and come on in</span>
        <span
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          className='footer'
        >
          <SiWebflow />
          Webdevstudios
        </span>
      </div>
      <div className='right-signup-layout'>
        <div className='header'>
          <span className='text'>
            Don't have an account yet?
            <button
              className='btn-login'
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              Login
            </button>
          </span>
        </div>
        <div className=' col-6 mx-auto'>
          <span className='title11'>Webdevstudios</span>
        </div>
        <div className='welcome col-8 mx-auto'>
          Get better data with conversational forms, surveys, quizzes & more.
        </div>
        <div className='content-form col-6 mx-auto'>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' className='form-control' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
            />
          </div>
          <div>
            <Button className='btn-signup'>Create Free My Account</Button>
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
    </div>
  );
};
export default SignUp;
