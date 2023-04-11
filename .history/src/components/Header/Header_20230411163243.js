import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>DevHcmUte</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='admins'>Admin</Nav.Link>
            <Nav.Link href='users'>User</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title='Setting' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Log in</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Log out</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
