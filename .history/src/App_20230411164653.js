import { Button } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header/Header";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'></div>
      </div>

      <div>
        test Link
        <div>
          <Button>
            <Link to='./users'>Go to user page</Link>
          </Button>
          <Button>
            <Link to='./admins'>Go to admin page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
