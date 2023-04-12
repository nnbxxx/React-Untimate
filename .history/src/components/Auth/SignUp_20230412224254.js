import "./SignUp.scss";
import { SiWebflow } from "react-icons/si";
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
        <div className='content-form col-2 mx-auto'>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' className='form-control' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
