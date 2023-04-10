import React from "react";

class DisplayInfor extends React.Component {

  render() {
    return (
      let {name,age} = this.props;
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
