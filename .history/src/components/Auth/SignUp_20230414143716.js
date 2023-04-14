import "./SignUp.scss";
import { SiWebflow } from "react-icons/si";
import { Button } from "react-bootstrap";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isshowpassword, setIsshowpassword] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSignUp = async () => {
    //validate
    console.log(password, !password);
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
    } else if (!password) {
      toast.error("Invalid Password");
    }
    //call api
    let data = await postRegister(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
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
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label>UserName</label>
            <input
              type='text'
              className='form-control'
              placeholder='User Name'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className='form-group form-password'>
            <label>Password</label>
            <input
              type={isshowpassword ? "text" : "password"}
              className='form-control'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span
              className='icon-eye'
              onClick={() => {
                setIsshowpassword(!isshowpassword);
              }}
            >
              {isshowpassword ? <VscEyeClosed /> : <VscEye />}
            </span>
          </div>
          <div>
            <Button
              className='btn-signup'
              onClick={() => {
                handleSignUp();
              }}
            >
              Create Free My Account
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
    </div>
  );
};
export default SignUp;
