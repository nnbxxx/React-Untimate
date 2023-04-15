import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    "🚀 ~ file: DetailQuiz.js:9 ~ fetchQuestions ~ res:", res;
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(data)
        .groupBy("id")
        .map((value, key) => ({ quizId: key, data: value }))
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
