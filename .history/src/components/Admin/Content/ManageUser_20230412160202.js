import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { getAllUsers } from "../../../services/apiService";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";
const ManageUser = (props) => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchListUser();
  }, []);
  const fetchListUser = async () => {
    let res = await getAllUsers();
    res.EC === 0 && setListUser(res.DT);
  };
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
          <TableUser listUser={listUser} />
        </div>
        <ModalCreateUser
          show={showModalAddUser}
          setShow={setShowModalAddUser}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser show={showModalUpdateUser} />
      </div>
    </div>
  );
};
export default ManageUser;
