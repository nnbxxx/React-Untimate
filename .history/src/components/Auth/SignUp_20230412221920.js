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
      <div className='right-signup-layout col-6'></div>
    </div>
  );
};
export default SignUp;
