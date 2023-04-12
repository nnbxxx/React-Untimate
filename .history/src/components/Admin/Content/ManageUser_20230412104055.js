import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  return (
    <div className='manage-user-container'>
      <div className='title'>Manager Users</div>
      <div className='manage-user-content'>
        <div className='btn-add-new '>
          <button
            className='btn btn-primary'
            onClick={(e) => {
              setShowModalAddUser(!showModalAddUser);
              console.log(
                "🚀 ~ file: ManageUser.js:17 ~ ManageUser ~ showModalAddUser:",
                showModalAddUser
              );
            }}
          >
            <FcPlus />
            Add new user
          </button>
        </div>

        <div className='table-user-container'>Table users</div>
        <ModalCreateUser showModalAddUser={showModalAddUser} />
      </div>
    </div>
  );
};
export default ManageUser;
