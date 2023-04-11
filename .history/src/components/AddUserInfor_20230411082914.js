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
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I'm from {address}. I'm {age} year olds
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <input
          value={name}
          type='text'
          onChange={(e) => {
            handleOnChange(e);
          }}
        ></input>
        <input
          value={age}
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
