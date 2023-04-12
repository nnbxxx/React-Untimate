import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <div className='manage-user-container'>
      <div className='title'>Manager Users</div>
      <div className='manage-user-content'>
        <div className='btn-add-new '>
          <button className='btn btn-primary'>Add new user</button>
        </div>

        <div className='table-user-container'>Table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
