import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import {
  getAllUsers,
  getUsersWithPaginate,
} from "../../../services/apiService";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
  const LIMIT_USER = 6;
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [userView, setUserView] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setUserUpdate(user);
  };
  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setUserView(user);
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setUserDelete(user);
  };
  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPaginate(1);
  }, []);
  const fetchListUser = async () => {
    let res = await getAllUsers();
    res.EC === 0 && setListUser(res.DT);
  };
  const fetchListUserWithPaginate = async (page) => {
    let res = await getUsersWithPaginate(page, LIMIT_USER);
    res.EC === 0 && setListUser(res.DT.users);
    res.EC === 0 && setPageCount(res.DT.totalPages);
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
          {/* <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            pageCount={pageCount}
          />
        </div>
        <ModalCreateUser
          show={showModalAddUser}
          setShow={setShowModalAddUser}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          userUpdate={userUpdate}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          setUserUpdate={setUserUpdate}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          userView={userView}
          setUserView={setUserView}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          userDelete={userDelete}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
        />
      </div>
    </div>
  );
};
export default ManageUser;
