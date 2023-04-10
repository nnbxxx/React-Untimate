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
        My name is {this.state.name} and I'm from {this.state.address}. I'm{" "}
        {this.state.age} year olds
      </div>
    );
  }
}
export default MyComponent;
