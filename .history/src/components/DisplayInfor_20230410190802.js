import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    return listUsers.forEach((item) => {
      return (
        <div>
          <div>My name is {item.name}</div>
          <div>My age is {item.age}</div>
        </div>
        <hr></hr>
      );
    });
  }
}
export default DisplayInfor;
