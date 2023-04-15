import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      "🚀 ~ file: DetailQuiz.js:13 ~ fetchQuestions ~ raw:", raw;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let arr = [];
          let description = "";
          let image = "";
          data.forEach((item, index) => {
            if (index === 0) {
              description = item.description;
              image = item.image;
            }
          });
          return { questionId: key, data: value, description, image };
        })
        .value();
      "🚀 ~ file: DetailQuiz.js:15 ~ fetchQuestions ~ data:", data;
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return <div className='detail-quiz-container'>DetailQuiz</div>;
};
export default DetailQuiz;
