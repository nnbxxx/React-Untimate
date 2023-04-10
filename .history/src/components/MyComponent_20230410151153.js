import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Ngo Nguyen Bao",
    address: "HCM",
    age: 20,
  };
  //JSX
  render() {
    return (
      <div>
        My first component
        {Math.random()}
      </div>
    );
  }
}
export default MyComponent;
