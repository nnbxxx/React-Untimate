import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();
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
            arr.push(item.answers);
          });
          return { questionId: key, answers: arr, description, image };
        })
        .value();
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
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
          <div className='question'>Question 1: how are you doing ?</div>
          <div className='answer'>
            <div className='a-child'>A. abcdefeg</div>
            <div className='b-child'>B. abcdefeg</div>
            <div className='c-child'>C. abcdefeg</div>
            <div className='d-child'>D. abcdefeg</div>
          </div>
        </div>
        <div className='footer'>
          <button className='btn btn-secondary ml-3'>Next</button>
          <button className='btn btn-primary'>Prev</button>
        </div>
      </div>
      <div className='right-content'></div>
    </div>
  );
};
export default DetailQuiz;
