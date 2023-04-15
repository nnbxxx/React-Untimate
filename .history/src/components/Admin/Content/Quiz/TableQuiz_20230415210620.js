import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import { toast } from "react-toastify";
const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    "🚀 ~ file: TableQuiz.js:9 ~ fetchQuiz ~ res:", res;
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
      toast.success(res.EM);
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <table className='table table-hover table-bordered'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Type</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableQuiz;
