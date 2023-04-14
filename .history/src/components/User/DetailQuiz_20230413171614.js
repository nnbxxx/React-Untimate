import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();
  console.log("🚀 ~ file: DetailQuiz.js:10 ~ DetailQuiz ~ location:", location);
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
        <div className='q-content'>Question Content</div>
        <div className='footer'>Question Content</div>
      </div>
      <div className='right-content'></div>
    </div>
  );
};
export default DetailQuiz;
