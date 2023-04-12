import "./SignUp.scss";
import { SiWebflow } from "react-icons/si";
const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='left-signup-layout '>
        <span className='title'>Sign up and come on in</span>
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
      </div>
    </div>
  );
};
export default SignUp;
