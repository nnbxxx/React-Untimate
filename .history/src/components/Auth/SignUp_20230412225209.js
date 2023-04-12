import "./SignUp.scss";
import { SiWebflow } from "react-icons/si";
import { Button } from "react-bootstrap";
import { BiShow } from "react-icons/bi";
const SignUp = () => {
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
        <div className='header '>
          <span className='text'>
            Don't have an account yet?
            <button
              className='btn-signup'
              onClick={() => {
                // navigate("/SignUp");
              }}
            >
              {" "}
              Sign Up
            </button>
          </span>
        </div>
        <div className='title col-6 mx-auto'>Adventure Webdevstudios</div>
        <div className='welcome col-10 mx-auto'>
          Get better data with conversational forms, surveys, quizzes & more.
        </div>
        <div className='content-form col-4 mx-auto'>
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
        </div>
      </div>
    </div>
  );
};
export default SignUp;
