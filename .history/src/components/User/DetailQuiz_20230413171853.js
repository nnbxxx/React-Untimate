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
        <div className='title'>{location?.state?.quizTitle}</div>
        <div className='q-body'>
          <img />
        </div>
        <div className='q-content'>
          <div className='question'></div>
          <div className='answer'>
            <div>A. abcdefeg</div>
            <div>B. abcdefeg</div>
            <div>C. abcdefeg</div>
            <div>D. abcdefeg</div>
          </div>
        </div>
        <div className='footer'>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className='right-content'></div>
    </div>
  );
};
export default DetailQuiz;
