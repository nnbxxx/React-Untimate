import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../services/apiService";
import { toast } from "react-toastify";
import { doLogOut } from "../../redux/action/userAction";
import "./header.scss";
import Language from "./language";
const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/SignUp");
  };
  const handleLogout = async () => {
    let re = await logOut(account.email, account.refresh_token);
    if (re && re.EC === 0) {
      navigate("/login");
      dispatch(doLogOut());
    } else {
      toast.error(re.EM);
    }
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <NavLink to='/' className='navbar-brand'>
          Webdevstudios
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='./admins' className='nav-link'>
              Admin
            </NavLink>
            <NavLink to='./users' className='nav-link'>
              User
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button
                  className='btn-login'
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Log In
                </button>
                <button
                  className='btn-signup'
                  onClick={() => {
                    handleSignUp();
                  }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <NavDropdown title='Setting' id='basic-nav-dropdown'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Language />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
