import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Ngô Nguyên Bảo", age: 19 },
      { id: 2, name: "Lâm Thị Lan Anh", age: 19 },
      { id: 3, name: "Ngô Nguyên Bảo", age: 19 },
    ],
  };
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
