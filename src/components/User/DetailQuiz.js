import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import { toast } from "react-toastify";
import ModalResult from "./ModalResult";
import RightContent from "../Admin/Content/Quiz/RightContent/RightContent";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();
  const [dataquiz, setDataquiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [dataModalResult, setDataModalResult] = useState({});
  const [isShowModalResult, setIsShowModalResult] = useState(false);
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let arr = [];
          let description = "";
          let image = "";
          value.forEach((item, index) => {
            if (index === 0) {
              description = item.description;
              image = item.image;
            }
            item.answers.isSelected = false;
            arr.push(item.answers);
          });
          arr = _.orderBy(arr, ["id"], ["asc"]);
          return { questionId: key, answers: arr, description, image };
        })
        .value();
      setDataquiz(data);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  const handleNext = () => {
    if (dataquiz && dataquiz.length > index + 1) setIndex(index + 1);
  };
  const handlePrev = () => {
    if (dataquiz && 0 <= index - 1) setIndex(index - 1);
  };
  const handleCheckBox = (answerId, questionId) => {
    let dataquizClone = _.cloneDeep(dataquiz);
    let q = dataquizClone.find((item) => item.questionId === questionId);
    if (q && q.answers) {
      let tmp = q.answers.map((item) => {
        if (+item.id === +answerId) item.isSelected = !item.isSelected;
        return item;
      });
      q = tmp;
    }

    let index = dataquizClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      setDataquiz(dataquizClone);
    }
  };
  const handleSubmitQuiz = async () => {
    let answers = [];
    if (dataquiz && dataquiz.length > 0) {
      dataquiz.forEach((item) => {
        let questionId = item.questionId;
        let userAnswerId = [];
        item.answers.forEach((q) => {
          if (q.isSelected) userAnswerId.push(q.id);
        });
        answers.push({ questionId: +questionId, userAnswerId });
      });
    }
    let payLoad = { quizId: +quizId, answers };
    let res = await postSubmitQuiz(payLoad);
    if (res && res.EC === 0) {
      setDataModalResult({
        countCorrect: res.DT.countCorrect,
        countTotal: res.DT.countTotal,
        quizData: res.DT.quizData,
      });
      setIsShowModalResult(true);
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className='detail-quiz-container'>
      <div className='left-content'>
        <h1 className='title'>
          Quiz {quizId}: {location?.state?.quizTitle}
        </h1>
        <hr />
        <div className='q-body'>
          <img />
        </div>
        <div className='q-content'>
          <Question
            data={dataquiz && dataquiz.length > 0 && dataquiz[index]}
            index={index}
            handleCheckBox={handleCheckBox}
          />
        </div>
        <div className='footer'>
          <button
            className='btn btn-primary'
            onClick={() => {
              handlePrev();
            }}
          >
            Prev
          </button>
          <button
            className='btn btn-secondary '
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
              handleSubmitQuiz();
            }}
            className='btn btn-warning'
          >
            Finnish
          </button>
        </div>
      </div>
      <div className='right-content'>
        <RightContent
          dataquiz={dataquiz}
          handleSubmitQuiz={handleSubmitQuiz}
          setIndex={setIndex}
        />
      </div>
      <ModalResult
        show={isShowModalResult}
        setShow={setIsShowModalResult}
        dataModalResult={dataModalResult}
        setDataModalResult={setDataModalResult}
      />
    </div>
  );
};
export default DetailQuiz;
