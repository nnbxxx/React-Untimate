import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  render() {
    //DRY don't repeat yourself
    return (
      <div>
        <UserInfo />
        <DisplayInfor name="Ngô Nguyên Bảo" age={20} />
        <br></br>
        <DisplayInfor name="Lâm Thị Lan Anh" age={20} />
      </div>
    );
  }
}
export default MyComponent;
