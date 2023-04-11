import { Button } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div>
        test Link
        <div>
          <Link to='./users'>Go to user page</Link>
          <Link to='./admins'>Go to admin page</Link>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default App;
