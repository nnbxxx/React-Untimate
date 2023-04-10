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
  handleOnMouseOver(e) {
    console.log(e);
    console.log(e.pageX);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}. I'm{" "}
        {this.state.age} year olds
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
      </div>
    );
  }
}
export default MyComponent;
