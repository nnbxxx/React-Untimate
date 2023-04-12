import "./Login.scss";
const Login = () => {
  return (
    <div className='login-container'>
      <div className='header'>Don't have an account yet?</div>
      <div className='title col-4'>Adventure Webdevstudios</div>
      <div className='welcome col-4'>Hello, who’s this?</div>
      <div className='content-form col-4'>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' className='form-control' />
        </div>
      </div>
    </div>
  );
};
export default Login;
