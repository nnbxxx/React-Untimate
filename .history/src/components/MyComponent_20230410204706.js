import React from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Ngô Nguyên Bảo", age: "19" },
      { id: 2, name: "Lâm Thị Lan Anh", age: "18" },
      { id: 3, name: "Từ Cảnh Minh", age: "69" },
    ],
  };
  render() {
    //DRY don't repeat yourself
    return (
      <div>
        <UserInfo />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
