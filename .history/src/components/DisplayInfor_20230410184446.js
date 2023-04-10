import React from "react";

class DisplayInfor extends React.Component {
  let {name,age} = this.props;
  render() {
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
