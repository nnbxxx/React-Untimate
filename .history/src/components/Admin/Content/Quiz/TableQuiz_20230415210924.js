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
      // toast.success(res.EM);
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
        {listQuiz &&
          listQuiz.length > 0 &&
          listQuiz.map((item, index) => {
            return (
              <tr key={`table-quiz-${index}`}>
                <th scope='row'>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.difficulty}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableQuiz;
