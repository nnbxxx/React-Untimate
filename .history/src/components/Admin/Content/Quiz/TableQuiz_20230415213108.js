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
    <>
      <div style={{ fontSize: "20px", marginLeft: "6px" }}>List Quizes</div>
      <table className='table table-hover table-bordered mt-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Action</th>
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
                  <td style={{ display: "flex", gap: "15px" }}>
                    <button className='btn btn-warning'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableQuiz;
