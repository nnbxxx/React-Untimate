import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModalAddUser, setshowModalAddUser] = useState(initialState);
  return (
    <div className='manage-user-container'>
      <div className='title'>Manager Users</div>
      <div className='manage-user-content'>
        <div className='btn-add-new '>
          <button className='btn btn-primary'>
            <FcPlus />
            Add new user
          </button>
        </div>

        <div className='table-user-container'>Table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
