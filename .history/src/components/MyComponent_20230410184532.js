import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfor name="nnb" age={20} />
        <br></br>
      </div>
    );
  }
}
export default MyComponent;
