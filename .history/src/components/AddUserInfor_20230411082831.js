import React, { useState } from "react";
const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAge = (e) => {
    setAge(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // thêm vào state obj

    props.handleAddUserInfor({
      id: Math.floor(Math.random() * 10000 + 1) + "-random",
      name: state.name,
      age: state.age,
    });
  };

  return (
    <div>
      My name is {state.name} and I'm from {state.address}. I'm {state.age} year
      olds
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <input
          value={state.name}
          type='text'
          onChange={(e) => {
            handleOnChange(e);
          }}
        ></input>
        <input
          value={state.age}
          type='text'
          onChange={(e) => {
            handleOnAge(e);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
