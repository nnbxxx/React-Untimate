import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

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
              setShowModalAddUser(true);
            }}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <div className='table-user-container'>
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalAddUser}
          setShow={setShowModalAddUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
