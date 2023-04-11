import React from "react";
const AddUserInfo = (props) => {
  state = {
    name: "",
    address: "",
    age: 0,
  };
  const [state, setState] = useState(initialState);
  const handleOnChange = (e) => {
    setState({
      name: e.target.value,
    });
  };
  const handleOnAge = (e) => {
    setState({
      age: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // thêm vào state obj

    props.handleAddUserInfor({
      id: Math.floor(Math.random() * 1000 + 1) + "-random",
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
