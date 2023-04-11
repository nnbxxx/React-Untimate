import { Button } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div>
        test Link
        <div>
          <Button className='btn btn-primary'>Go to user page</Button>
          <Button className='btn btn-primary'>Go to admin page</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
