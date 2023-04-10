import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "nnbx03",
    address: "HCM",
    age: 20,
  };
  handleClick = (e) => {
    console.log(e);
    console.log(`My name is ${this.state.name}`);
    this.setState({
      name: "ngo nguyen bao",
      age: Math.floor(Math.random() * 100) + 1,
    });
  };
  handleOnMouseOver(e) {
    // console.log(e);
    // console.log(e.pageX);
  }
  handleOnChange(e) {
    // console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    e.clear();
    console.log(this.state);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}. I'm{" "}
        {this.state.age} year olds
        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.handleOnChange(e);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
