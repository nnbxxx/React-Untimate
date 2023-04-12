import "./SignUp.scss";
import { SiWebflow } from "react-icons/si";
const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='left-signup-layout col-6'>
        <span>Sign up and come on in</span>
        <span
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          <SiWebflow />
          Webdevstudios
        </span>
      </div>
      <div className='right-signup-layout col-6'>
        <div className='header mx-auto'>
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
