import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "nnbx03",
    address: "HCM",
    age: 20,
  };
  handleClick(e) {
    console.log(e);
  }
  handleMoveOn(e) {
    console.log(e);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}. I'm{" "}
        {this.state.age} year olds
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
export default MyComponent;
