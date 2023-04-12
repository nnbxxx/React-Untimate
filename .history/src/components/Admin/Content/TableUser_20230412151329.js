import { useState } from "react";

const TableUser = (props) => {
  const [listUser, setListUser] = useState([
    {
      id: 9,
      username: "nnbxabc",
      email: "uyenbao4aa5@gmail.com",
      role: "USER",
      image: "",
    },
    {
      id: 8,
      username: "123poi",
      email: "asdssa@gmail.com",
      role: "USER",
      image: "",
    },
    {
      id: 7,
      username: "123abc",
      email: "123212@gmail.com",
      role: "USER",
      image: "",
    },
  ]);
  return (
    <>
      <table class='table table-hover table-bordered'>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>User Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Role</th>
          </tr>
        </thead>
        <tbody>
          {listUser && listUser.length > 0 && listUser.map((item, index) => {})}
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
