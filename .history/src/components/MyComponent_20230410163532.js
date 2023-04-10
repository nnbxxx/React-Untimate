import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "nnbx03",
    address: "HCM",
    age: 20,
  };
  handleOnChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
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
            value={this.state.name}
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
