import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <br></br>
        <DisplayInfor name="nnb" age={20} />
      </div>
    );
  }
}
export default MyComponent;
