import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import { toast } from "react-toastify";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [quizOption, setQuizOption] = useState({});
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
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
      <table className='table table-hover table-bordered mt-2 mb-2'>
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
                    <button
                      className='btn btn-warning'
                      onClick={() => {
                        setIsShowModalUpdate(true);
                        setQuizOption(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        setIsShowModalDelete(true);
                        setQuizOption(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        show={isShowModalDelete}
        setShow={setIsShowModalDelete}
        quizData={quizOption}
        fetchQuiz={fetchQuiz}
      />
      <ModalUpdateQuiz
        show={isShowModalUpdate}
        setShow={setIsShowModalUpdate}
        quizData={quizOption}
        setQuizData={setQuizOption}
        fetchQuiz={fetchQuiz}
      ></ModalUpdateQuiz>
    </>
  );
};

export default TableQuiz;
