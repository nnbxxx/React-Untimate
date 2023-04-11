import React,{useState} from "react";
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
const AddUserInfo = ()=> {
  const [state, setstate] = useState({
    name: "",
    address: "",
    age: 0,
  });
  handleOnChange(e) {
    setState({
      name: e.target.value,
    });
  }
  const handleOnAge = (e)=> {
    setState({
      age: e.target.value,
    });
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    // thêm vào state obj

    props.handleAddUserInfor({
      id: Math.floor(Math.random() * 10 + 1) + "-random",
      name: state.name,
      age: state.age,
    });
  }

    return (
      <div>
        My name is {state.name} and I'm from {state.address}. I'm{" "}
        {state.age} year olds
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
  
}
export default AddUserInfo;
