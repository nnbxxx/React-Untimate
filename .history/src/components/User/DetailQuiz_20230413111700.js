import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {}, []);
  return <div className='detail-quiz-container'>DetailQuiz</div>;
};
export default DetailQuiz;
