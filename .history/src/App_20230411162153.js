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
          <Button>
            <Link to='./admins'>Go to admin page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
