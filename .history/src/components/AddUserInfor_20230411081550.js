import React, { useState } from "react";
// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "",
//     age: 0,
//   };
//   handleOnChange(e) {
//     this.setState({
//       name: e.target.value,
//     });
//   }
//   handleOnAge(e) {
//     this.setState({
//       age: e.target.value,
//     });
//   }
//   handleOnSubmit(e) {
//     e.preventDefault();
//     // thêm vào state obj

//     this.props.handleAddUserInfor({
//       id: Math.floor(Math.random() * 10 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   }
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.address}. I'm{" "}
//         {this.state.age} year olds
//         <form
//           onSubmit={(e) => {
//             this.handleOnSubmit(e);
//           }}
//         >
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(e) => {
//               this.handleOnChange(e);
//             }}
//           ></input>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(e) => {
//               this.handleOnAge(e);
//             }}
//           ></input>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfo = (props) => {
  const [statee, setState] = useState({
    name: "",
    address: "",
    age: 0,
  });
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
      id: Math.floor(Math.random() * 10 + 1) + "-random",
      name: statee.name,
      age: statee.age,
    });
  };

  return (
    <div>
      My name is {statee.name} and I'm from {statee.address}. I'm {statee.age}{" "}
      year olds
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <input
          value={statee.name}
          type='text'
          onChange={(e) => {
            handleOnChange(e);
          }}
        ></input>
        <input
          value={statee.age}
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
