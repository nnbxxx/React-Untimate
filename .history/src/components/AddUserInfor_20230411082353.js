import React, {useState} from "react";
const  AddUserInfo = () => {
  state = {
    name: "",
    address: "",
    age: 0,
  };
  const handleOnChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }
  const handleOnAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // thêm vào state obj

    this.props.handleAddUserInfor({
      id: Math.floor(Math.random() * 10000 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  }
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
            type='text'
            onChange={(e) => {
              this.handleOnChange(e);
            }}
          ></input>
          <input
            value={this.state.age}
            type='text'
            onChange={(e) => {
              this.handleOnAge(e);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfo;
