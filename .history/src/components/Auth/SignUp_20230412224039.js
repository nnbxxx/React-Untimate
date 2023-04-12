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
        <div className='title col-8 mx-auto'>Adventure Webdevstudios</div>
        <div className='welcome col-8 mx-auto'>
          Get better data with conversational forms, surveys, quizzes & more.
        </div>
      </div>
    </div>
  );
};
export default SignUp;
