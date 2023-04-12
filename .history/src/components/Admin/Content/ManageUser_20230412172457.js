import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { getAllUsers } from "../../../services/apiService";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";
import ModalViewUser from "./ModalViewUser";
const ManageUser = (props) => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [userView, setUserView] = useState({});
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setUserUpdate(user);
  };
  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setUserView(user);
  };
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
          <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
          />
        </div>
        <ModalCreateUser
          show={showModalAddUser}
          setShow={setShowModalAddUser}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          userUpdate={userUpdate}
          fetchListUser={fetchListUser}
          setUserUpdate={setUserUpdate}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          setUserView={setUserView}
        />
      </div>
    </div>
  );
};
export default ManageUser;
