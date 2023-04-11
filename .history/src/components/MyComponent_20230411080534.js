import React from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
//
const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Ngô Nguyên Bảo", age: "19" },
    { id: 2, name: "Lâm Thị Lan Anh", age: "18" },
    { id: 3, name: "Từ Cảnh Minh", age: "69" },
  ]);
  const handleAddUserInfor = (obj) => {
    this.setState({
      listUsers: [obj, ...this.state.listUsers],
    });
  };
  const handleRemoveUserInfor = (idObj) => {
    this.setState({
      listUsers: [...state.listUsers].filter((item) => item.id !== idObj),
    });
  };

  return (
    <>
      <AddUserInfo handleAddUserInfor={handleAddUserInfor} />
      <DisplayInfor
        listUsers={state.listUsers}
        handleRemoveUserInfor={handleRemoveUserInfor}
      />
    </>
  );
};
export default MyComponent;
