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
          <Button>Go to user page</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
