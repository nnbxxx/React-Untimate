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
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
          </tr>
        </thead>
        <tbody>
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
