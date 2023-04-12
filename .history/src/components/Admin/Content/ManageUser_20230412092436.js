import Example from "./ModalCreateUser";


const ManageUser = (props) => {
  return (
    <div className='manage-user-container'>
      <div className='title'>Manager Users</div>
      <div className='manage-user-content'>
        <button>Add new user</button>
        <div>
          Table users
          <Example></Ex>
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
