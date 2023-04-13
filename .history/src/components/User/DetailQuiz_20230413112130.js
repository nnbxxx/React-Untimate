import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    console.log("🚀 ~ file: DetailQuiz.js:9 ~ fetchQuestions ~ res:", res);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return <div className='detail-quiz-container'>DetailQuiz</div>;
};
export default DetailQuiz;
