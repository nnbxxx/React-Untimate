import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    "🚀 ~ file: DetailQuiz.js:9 ~ fetchQuestions ~ res:", res;
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(data)
        // Group the elements of Array based on `color` property
        .groupBy("color")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => ({ color: key, users: value }))
        .value();
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return <div className='detail-quiz-container'>DetailQuiz</div>;
};
export default DetailQuiz;
