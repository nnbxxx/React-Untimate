import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

const App = () => {
  return (
    <div className='App'>
      <p>Hello World nnb</p>
    </div>
  );
};

export default App;
