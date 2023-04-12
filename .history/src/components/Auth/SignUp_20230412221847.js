import "./SignUp.scss";
const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='left-signup-layout'>
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
      <div className='right-signup-layout'></div>
    </div>
  );
};
export default SignUp;
